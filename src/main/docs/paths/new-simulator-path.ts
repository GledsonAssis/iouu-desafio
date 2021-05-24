export const newSimulator = {
  post: {
    tags: ['Financiamento'],
    summary: 'API para simular o financiamento',
    description: 'Essa rota pode ser executada por qualquer usuário',
    requestBody: {
      required: true,
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: "#/schemas/newSimulatorParams"
          }
        },
        'application/json': {
          schema: {
            $ref: '#/schemas/newSimulatorParams'
          }
        }
      }
    },
    responses: {
      200: {
        $ref: '#/components/responseNewSimulator'
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
