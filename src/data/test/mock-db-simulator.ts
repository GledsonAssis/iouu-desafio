import { NewSimulatorRepository } from '@/data/protocols/db/simulator/new-simulator-repository'
import { LoadSimulatorByEmailRepository } from '@/data/protocols/db/simulator/load-simulator-by-email-repository'
import { NewSimulatorParam } from '@/domain/usecases/simulator/new-simulator'
import { SimulatorModel } from '@/domain/models/simulator'
import { mockSimulatorModel } from '@/domain/test'
import { PayInstallmentRepository } from '../protocols/db/simulator/pay-installment-repository'

export class NewSimulatorRepositorySpy implements NewSimulatorRepository {
  newSimulatorParams: NewSimulatorParam

  async add(data: NewSimulatorParam): Promise<void> {
    this.newSimulatorParams = data
  }
}

export class PayInstallmentRepositorySpy implements PayInstallmentRepository {
  id: string

  async pay(id: string): Promise<void> {
    this.id = id
  }
}

export class LoadSimulatorByEmailRepositorySpy implements LoadSimulatorByEmailRepository {
  simulatortModel = mockSimulatorModel()
  email: string

  async loadByEmail(email: string): Promise<SimulatorModel> {
    this.email = email
    return this.simulatortModel
  }
}
