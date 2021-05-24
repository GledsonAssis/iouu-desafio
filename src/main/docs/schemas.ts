import {
  newSimulatorParamsSchema,
  searchSimulatorParamsSchema,
  errorSchema,
  responseNewSimulatorSchema,
  responsePaySchema,
  responseSearchSimulatorSchema
} from './schemas/'

export default {
  newSimulatorParams: newSimulatorParamsSchema,
  searchSimulatorParams: searchSimulatorParamsSchema,
  error: errorSchema,
  responseNewSimulator: responseNewSimulatorSchema,
  responsePay: responsePaySchema,
  responseSearchSimulator: responseSearchSimulatorSchema
}
