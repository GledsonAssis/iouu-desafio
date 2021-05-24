import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'IOUU - Desafio',
    description: 'Essa documentação foi desenvolvida para compor parte dos requisitos do desafio da IOUU.',
    version: '0.1.0',
    contact: {
      name: 'Gledson Assis',
      email: 'gledson453@gmail.com',
    }
  },
  servers: [{
    url: '/api',
    description: 'Principal'
  }],
  paths,
  schemas,
  components
}
