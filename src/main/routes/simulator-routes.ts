import { Router } from 'express'

import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeNewSimulatorController } from '@/main/factories/controllers/simulator/new-simulator/new-simulator-controller-factory'
import { makeLoadSimulatorByEmailController } from '../factories/controllers/simulator/load-simulator-by-email/load-simulator-by-email-controller-factory'
import { makePayInstallmentController } from '../factories/controllers/simulator/pay-installment/pay-installment-controller-factory'

export default (router: Router): void => {
  router.post('/simular', adaptRoute(makeNewSimulatorController()))
  router.post('/simular/buscar', adaptRoute(makeLoadSimulatorByEmailController()))
  router.put('/pagar/:id', adaptRoute(makePayInstallmentController()))
}
