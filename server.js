// ESM
import Fastify from 'fastify'
import firstRoute from './our-first-route.js'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.register(firstRoute)

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0'  })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()