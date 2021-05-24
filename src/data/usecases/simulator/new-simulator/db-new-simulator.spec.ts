import { DbNewSimulator } from './db-new-simulator'
import { NewSimulatorRepositorySpy, LoadSimulatorByEmailRepositorySpy } from '@/data/test'
import { mockNewSimulatorParams, throwError } from '@/domain/test'

type SutTypes = {
  sut: DbNewSimulator
  newSimulatorRepositorySpy: NewSimulatorRepositorySpy
  loadSimulatorByEmailRepositorySpy: LoadSimulatorByEmailRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSimulatorByEmailRepositorySpy = new LoadSimulatorByEmailRepositorySpy()
  loadSimulatorByEmailRepositorySpy.simulatortModel = null
  const newSimulatorRepositorySpy = new NewSimulatorRepositorySpy()
  const sut = new DbNewSimulator(
    newSimulatorRepositorySpy,
    loadSimulatorByEmailRepositorySpy,
  )
  return {
    sut,
    newSimulatorRepositorySpy,
    loadSimulatorByEmailRepositorySpy
  }
}

describe('DbNewSimulator Usecase', () => {
  test('Should call NewSimulatorRepository with correct values', async () => {
    const { sut, newSimulatorRepositorySpy } = makeSut()
    const data = mockNewSimulatorParams()
    await sut.add(data)
    // expect(newSimulatorRepositorySpy.newSimulatorParams).toBeTru()
  })

  test('Should throw if NewSimulatorRepository throws', async () => {
    const { sut, newSimulatorRepositorySpy } = makeSut()
    jest.spyOn(newSimulatorRepositorySpy, 'add').mockImplementationOnce(throwError)
    const promise = sut.add(mockNewSimulatorParams())
    await expect(promise).rejects.toThrow()
  })

  test('Should return an simulator on success', async () => {
    const { sut } = makeSut()
    const simulator = await sut.add(mockNewSimulatorParams())
    expect(simulator).toEqual(undefined)
  })

  test('Should call LoadSimulatorByEmailRepository with correct email', async () => {
    const { sut, loadSimulatorByEmailRepositorySpy } = makeSut()
    const newSimulatorParams = mockNewSimulatorParams()
    await sut.add(newSimulatorParams)
    expect(loadSimulatorByEmailRepositorySpy.email).toBe(newSimulatorParams.email)
  })
})
