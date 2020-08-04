import { Router } from 'express'
import { registerController, loginController } from './userController'
import { registerValidation, loginValidation } from './userValidations'

const userRouter = new Router()

userRouter.post('/users/register', registerValidation, registerController)
userRouter.post('/users/login', loginValidation, loginController)

export { userRouter }
