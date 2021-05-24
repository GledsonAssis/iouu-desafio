import { DbNewSimulator } from '@/data/usecases/simulator/new-simulator/db-new-simulator'
import { NewSimulator } from '@/domain/usecases/simulator/new-simulator'
import { SimulatorMongoRepository } from '@/infra/db/mongodb/simulator/simulator-mongo-repository'

export const makeDbNewSimulator = (): NewSimulator => {
  const simulatorMongoRepository = new SimulatorMongoRepository()
  return new DbNewSimulator(simulatorMongoRepository, simulatorMongoRepository)
}
