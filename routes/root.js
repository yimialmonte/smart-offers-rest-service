import { Router } from 'express'
import { rootController } from '../controllers'
import { AsyncWrapper } from '../utils/asyncWrapper'

const rootRouter = Router()

rootRouter.get('/', AsyncWrapper(rootController.getRoot))

export { rootRouter }
