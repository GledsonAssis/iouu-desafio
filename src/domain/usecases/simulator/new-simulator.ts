import { SimulatorModel } from '@/domain/models/simulator'

export type NewSimulatorParams = {
  name: string
  email: string
  tax: number
  number: number
  amount: number
}

export type NewSimulatorParam = Omit<SimulatorModel, 'id'>
export type NewSimulatorResponse = Omit<NewSimulatorParam, 'histories'>

export interface NewSimulator {
  add: (data: NewSimulatorParams) => Promise<void>
}
