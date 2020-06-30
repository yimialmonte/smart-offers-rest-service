import { Router } from 'express'
import userController from './userController'
import userValidations from './userValidations'

const userRouter = new Router()

userRouter.post('/login', userValidations.register, userController.register)
