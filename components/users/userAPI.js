import { Router } from 'express'
import auth from '../authentication/auth'
import { registerController, loginController, logoutController } from './userController'
import { registerValidation, loginValidation } from './userValidations'

const userRouter = new Router()

userRouter.post('/users/register', registerValidation, registerController)
userRouter.post('/users/login', loginValidation, loginController)
userRouter.post('/users/logout', auth, logoutController)

export { userRouter }
