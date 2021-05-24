export const responseSearchSimulator = {
  description: 'Sucesso',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/responseSearchSimulator'
      },
      examples: {
        success: {
          summary: "Response sucesso",
          value: {
            email: "string",
            data: [
              {
                number: 0,
                fees: 0,
                amortization: 0,
                installment: 0,
                outstandingBalance: 0
              }
            ],
            name: "string",
            id: "string"
          }
        }
      }
    }
  }
}
