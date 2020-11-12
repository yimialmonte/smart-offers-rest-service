import { server } from './config'
import { userRouter } from './components/users/userAPI'
import {offerRoute } from './components/offers/Route'
import { imageRouter } from './components/image/Route'
import registerMiddlewares from './middlewares'

async function main() {
  registerMiddlewares(server)
  server.use('/v1', userRouter)
  server.use('/v1/offers', offerRoute)
  server.use('/v1/upload', imageRouter)
  server.listen()
}

main()
