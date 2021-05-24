export const responseSearchSimulatorSchema = {
  type: 'object',
  properties: {
    email: { type: "string" },
    data: [
      {
        number: { type: "number" },
        fees: { type: "number" },
        amortization: { type: "number" },
        installment: { type: "number" },
        outstandingBalance: { type: "number" }
      }
    ],
    name: { type: "string" },
    id: { type: "string" },
  },
}
