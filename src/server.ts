import fasity from 'fastify'
import { knex } from './database'

const app = fasity()

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running!'))
