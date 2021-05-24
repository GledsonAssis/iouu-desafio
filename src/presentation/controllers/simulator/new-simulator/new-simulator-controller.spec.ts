import { NewSimulatorController } from './new-simulator-controller'
import { MissingParamError, ServerError } from '@/presentation/errors'
import { HttpRequest } from '@/presentation/protocols'
import { serverError, badRequest } from '@/presentation/helpers/http/http-helper'

import { ValidationSpy, NewSimulatorSpy } from '@/presentation/test'
import { throwError } from '@/domain/test'
import faker from 'faker'

const mockRequest = (): HttpRequest => {
  return {
    body: {
      tax: faker.datatype.number(),
      number: faker.datatype.number(),
      value: faker.datatype.number(),
      amount: faker.datatype.number(),
    }
  }
}

type SutTypes = {
  sut: NewSimulatorController
  newSimulatorSpy: NewSimulatorSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const newSimulatorSpy = new NewSimulatorSpy()
  const validationSpy = new ValidationSpy()
  const sut = new NewSimulatorController(newSimulatorSpy, validationSpy)
  return {
    sut,
    newSimulatorSpy,
    validationSpy
  }
}

describe('NewSimulator Controller', () => {
  test('Should return 500 if NewSimulator throws', async () => {
    const { sut, newSimulatorSpy } = makeSut()
    jest.spyOn(newSimulatorSpy, 'add').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  })

  test('Should call NewSimulator with correct values', async () => {
    const { sut, newSimulatorSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(newSimulatorSpy.newSimulatorParams).toEqual(httpRequest.body)
  })

  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.input).toEqual(httpRequest.body)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })
})
