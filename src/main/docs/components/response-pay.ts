export const responsePay = {
  description: 'Sucesso',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/responsePay'
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
