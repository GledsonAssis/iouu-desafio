import { makeNewSimulatorValidation } from './new-simulator-validation-factory'
import { makeDbNewSimulator } from '@/main/factories/usecases/simulator/new-simulator/db-new-simulator-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { NewSimulatorController } from '@/presentation/controllers/simulator/new-simulator/new-simulator-controller'
import { Controller } from '@/presentation/protocols'

export const makeNewSimulatorController = (): Controller => {
  const controller = new NewSimulatorController(makeDbNewSimulator(), makeNewSimulatorValidation())
  return makeLogControllerDecorator(controller)
}
