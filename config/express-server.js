import express from 'express'
const server = express()

const PORT = process.env.PORT || 3000

server.listen = server.listen.bind(server, PORT, () => {
  console.log(`Running on ${PORT}`)
})

export { server }
