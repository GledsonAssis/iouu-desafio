import { HttpResponse, HttpRequest, Controller, NewSimulator } from './new-simulator-controller-protocols'
import { badRequest, serverError, noContent, ok } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols/validation'

export class NewSimulatorController implements Controller {
  constructor(
    private readonly newSimulator: NewSimulator,
    private readonly validation: Validation
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      await this.newSimulator.add(httpRequest.body)
      return ok({
        sucesso: 0,
        resultado: {
          resposta: "Simulação adicionada com sucesso"
        }
      })
    } catch (error) {
      return serverError(error)
    }
  }
}
