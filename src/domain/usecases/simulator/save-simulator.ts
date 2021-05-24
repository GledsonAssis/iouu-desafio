import { NewSimulatorParams } from './new-simulator'

export interface SaveSimulator {
  save: (data: NewSimulatorParams) => Promise<void>
}
