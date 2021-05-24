import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import request from 'supertest'
import { mockNewSimulatorParams, mockSimulatorModel } from '@/domain/test'

let col: Collection

describe('Simulator Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    col = await MongoHelper.getCollection('simulator')
    await col.deleteMany({})
  })

  describe('POST /simulator', () => {
    test('Should return 200 on simulator', async () => {
      await request(app)
        .post('/api/simulator')
        .send(mockNewSimulatorParams())
        .expect(200)
    })
  })

  describe('POST /simulator/search', () => {
    test('Should return 200 on simulator', async () => {
      await request(app)
        .post('/api/simulator/search')
        .send(mockNewSimulatorParams().email)
        .expect(200)
    })
  })

  describe('PUT /pay/:id', () => {
    test('Should return 200 on simulator', async () => {
      const cur = await col.insertOne(mockSimulatorModel())
      const faker = cur.ops[0]
      await request(app)
        .put(`/api/pay/${faker._id.toString()}`)
        .expect(200)
    })
  })
})
