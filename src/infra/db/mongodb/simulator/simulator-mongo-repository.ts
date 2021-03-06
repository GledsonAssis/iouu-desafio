import { MongoHelper } from '../helpers/mongo-helper'
import { NewSimulatorParam, NewSimulatorParams } from '@/domain/usecases/simulator/new-simulator'
import { SimulatorModel } from '@/domain/models/simulator'
import { NewSimulatorRepository } from '@/data/protocols/db/simulator/new-simulator-repository'
import { LoadSimulatorByEmailRepository } from '@/data/protocols/db/simulator/load-simulator-by-email-repository'
import { PayInstallmentRepository } from '@/data/protocols/db/simulator/pay-installment-repository'
import { ObjectId } from 'mongodb'

export class SimulatorMongoRepository implements NewSimulatorRepository, LoadSimulatorByEmailRepository, PayInstallmentRepository {
  async pay(id: string): Promise<void> {
    const col = await MongoHelper.getCollection('simulator')
    await col.updateOne({ _id: new ObjectId(id) }, { $pop: { data: -1 } })
  }

  async add(data: NewSimulatorParam): Promise<void> {
    const col = await MongoHelper.getCollection('simulator')
    await col.updateOne({ email: data.email }, { $set: data }, { upsert: true })
  }

  async loadByEmail(email: string): Promise<SimulatorModel> {
    const col = await MongoHelper.getCollection('simulator')
    const simulator = await col.findOne({ email })
    return simulator && MongoHelper.map(simulator)
  }
}
