import { Simulator } from '@/domain/models/simulator'
import { NewSimulatorParam } from '@/domain/usecases/simulator/new-simulator'
import { NewSimulator, NewSimulatorParams, NewSimulatorRepository, LoadSimulatorByEmailRepository } from './db-new-simulator-protocols'

export class DbNewSimulator implements NewSimulator {
  constructor(
    private readonly newSimulatorRepository: NewSimulatorRepository,
    private readonly loadSimulatorByEmailRepository: LoadSimulatorByEmailRepository,
  ) { }

  async add(data: NewSimulatorParams): Promise<void> {
    const simulator = await this.loadSimulatorByEmailRepository.loadByEmail(data.email)
    if (!simulator) {
      const numbers = this.installment(data.number)
      const calculator = this.callCalculator(data, numbers)
      await this.newSimulatorRepository.add(calculator)
    } else {
      const numbers = this.installment(data.number)
      data.amount = simulator.data.reduce((acc: number, cur: Simulator) => acc + cur.installment, 0)
      const calculator = this.callCalculator(data, numbers)
      await this.newSimulatorRepository.add({ ...calculator, histories: simulator.data })
    }
  }

  private installment(parcel: number): number[] {
    let numbers = []
    for (let index = 0; index < parcel; index++) {
      numbers.push(index + 1)
    }
    return numbers
  }

  private callCalculator(data: NewSimulatorParams, numbers: number[]): NewSimulatorParam {
    let amount: number = data.amount
    let model: any = {
      data: [],
      email: data.email,
      name: data.name
    }
    let elements: any[] = []

    for (const parcel of numbers) {
      const amountTax = this.calculatorTax(data.tax, amount)
      const valueParcel = this.calculator(data)
      const amortization = this.calculatorAmortization(amountTax, valueParcel)
      const total = this.toCalculateDebtBalance(amount, amortization)

      const element: any = {
        number: parcel,
        fees: Math.ceil(amountTax * 100) / 100,
        amortization: Math.ceil(amortization * 100) / 100,
        installment: Math.ceil(valueParcel * 100) / 100,
        outstandingBalance: Math.ceil(total * 100) / 100
      }

      elements.push(element)

      amount -= amortization
      model.data = elements
    }

    return model
  }

  private toCalculateDebtBalance(amount: number, amortization: number): number {
    return amount - amortization
  }

  // calculo do juros
  private calculatorTax(tax: number, amount: number): number {
    return (amount / 100) * tax
  }

  // calcula de amortização
  private calculatorAmortization(tax: number, amount: number): number {
    return amount - tax
  }

  // calcular financimento
  private calculator(data: any): number {
    return data.amount * ((Math.pow((1 + this.tax(data.tax)), data.number) * this.tax(data.tax)) / (Math.pow((1 + this.tax(data.tax)), data.number) - 1))
  }

  // calcular tax
  private tax(value: number): number {
    return value / 100
  }
}
