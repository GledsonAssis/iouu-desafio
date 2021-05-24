export const responsePaySchema = {
  type: 'object',
  properties: {
    sucesso: 0,
    resultado: {
      resposta: {
        type: 'string'
      },
    }
  },
  required: ['sucesso', 'resultado']
}
