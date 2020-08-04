import * as Yup from 'yup'
import User from './user'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
})

const registerValidation = async (req, res, next) => {
  const { name, email, password } = req.body

  try {
    await RegisterSchema.validate({ name, email, password })
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new Yup.ValidationError('This user already exist', req.body, email)
    }
  } catch (error) {
    return res.status(422).json({ [error.path]: error.message })
  }
  next()
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})

const loginValidation = async (req, res, next) => {
  const { email, password } = req.body
  try {
    await LoginSchema.validate({ email, password })
  } catch (error) {
    return res.status(422).json({ [error.path]: error.message })
  }

  next()
}

export { registerValidation, loginValidation }
