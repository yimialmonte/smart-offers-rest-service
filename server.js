import { server } from './config'
import { userRouter } from './components/users/userAPI'
import {offerRoute } from './components/offers/Route'

import registerMiddlewares from './middlewares'

async function main() {
  registerMiddlewares(server)
  server.use('/v1', userRouter)
  server.use('/v1/offers', offerRoute)
  server.listen()
}

main()
