import helmet from 'helmet'
import cors from 'cors'
import express from 'express'

export default (server) => {
  server.use(cors())
  server.use(helmet())
  server.use(express.json())
}
