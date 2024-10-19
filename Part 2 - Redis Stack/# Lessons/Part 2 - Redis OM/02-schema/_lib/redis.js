import { createClient } from 'redis'

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
}).on('error', (err) => console.log('Redis Client Error', err))

if (!client.isOpen) client.connect()

export { client }
