import { NewSimulatorParam } from '@/domain/usecases/simulator/new-simulator'

export interface NewSimulatorRepository {
  add: (data: NewSimulatorParam) => Promise<void>
}
