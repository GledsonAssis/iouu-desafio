export const responseNewSimulator = {
  description: 'Sucesso',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/responseNewSimulator'
      },
      examples: {
        success: {
          summary: "Response sucesso",
          value: {
            sucesso: 0,
            resultado: {
              resposta: "string",
            }
          }
        }
      }
    }
  }
}
