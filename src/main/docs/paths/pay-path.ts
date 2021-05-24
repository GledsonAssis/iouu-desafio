export const payPath = {
  put: {
    tags: ['Financiamento'],
    summary: 'API para efeturar o pagamento de 1 parcela',
    description: 'Essa rota pode ser executada por qualquer usuário',
    parameters: [{
      in: 'path',
      name: 'id',
      description: 'ID da conta',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        $ref: '#/components/responsePay'
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
