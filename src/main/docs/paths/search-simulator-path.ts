export const searchSimulator = {
  post: {
    tags: ['Financiamento'],
    summary: 'API para realizar a busca de um financiamento por id',
    description: 'Essa rota pode ser executada por qualquer usuário',
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: "#/schemas/searchSimulatorParams"
          }
        },
        'application/json': {
          schema: {
            $ref: '#/schemas/searchSimulatorParams'
          }
        }
      }
    },
    responses: {
      200: {
        $ref: '#/components/responseSearchSimulator'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
