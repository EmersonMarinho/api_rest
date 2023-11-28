import fasity from 'fastify'
import { env } from './env'
import { transcationsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fasity()

app.register(cookie)
app.register(transcationsRoutes, { prefix: '/transactions' })

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Server is running!'))
