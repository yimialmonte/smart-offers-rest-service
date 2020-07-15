import express from 'express'
const server = express()
import database from './database'

database()
const PORT = process.env.PORT || 3000

server.listen = server.listen.bind(server, PORT, () => {
  console.log(`Running on ${PORT}`)
})

export { server }
