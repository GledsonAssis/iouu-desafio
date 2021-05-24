export const badRequest = {
  description: 'Erro na Requisição',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
