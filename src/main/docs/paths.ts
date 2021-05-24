import {
  newSimulator,
  searchSimulator,
  payPath
} from './paths/'

export default {
  '/simular': newSimulator,
  '/simular/buscar': searchSimulator,
  '/pagar/{id}': payPath
}
