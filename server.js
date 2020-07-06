import { server } from './config'
import { userRouter } from './components/users/userAPI'

import registerMiddlewares from './middlewares'

async function main() {
  registerMiddlewares(server)
  server.use('/v1', userRouter)
  server.listen()
}

main()
