import helmet from 'helmet'
import cors from 'cors'
import express from 'express'
import path from 'path'

const __dirname = path.resolve()

export default (server) => {
  server.use(cors())
  server.use(helmet())
  server.use('/uploads', express.static(path.join(__dirname, '/uploads')))
  server.use(express.json())
}
