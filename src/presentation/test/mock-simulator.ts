import { NewSimulator, NewSimulatorParams } from '@/domain/usecases/simulator/new-simulator'
import { LoadSimulatorByEmail } from '@/domain/usecases/simulator/load-simulator-by-email'
import { SimulatorModel } from '@/domain/models/simulator'
import { mockSimulatorModel } from '@/domain/test'
import { PayInstallment } from '@/domain/usecases/simulator/pay-installment'

export class NewSimulatorSpy implements NewSimulator {
  newSimulatorParams: NewSimulatorParams

  async add(account: NewSimulatorParams): Promise<void> {
    this.newSimulatorParams = account
  }
}

export class LoadSimulatorByEmailSpy implements LoadSimulatorByEmail {
  simulatorModel = mockSimulatorModel()
  email: string

  async loadByEmail(email: string): Promise<SimulatorModel> {
    this.email = email
    return this.simulatorModel
  }
}

export class PayInstallmentSpy implements PayInstallment {
  id: string

  async pay(id: string): Promise<void> {
    this.id = id
  }
}