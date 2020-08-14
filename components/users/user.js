import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from '../../env'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

userSchema.pre('save', async function (next) {
  const user = this

  if (!user.isModified('password')) return

  user.password = await bcryptjs.hash(user.password, 8)
  next()
})

userSchema.methods.generateToken = async function () {
  const user = this
  const secretKey = env.secretKey
  const token = jwt.sign({ _id: user._id.toString() }, secretKey)
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.statics.findUserByCredencials = async (email, password) => {
  const user = await User.findOne({ email })

  const errorMessage = 'Unable to login'

  if (!user) throw new Error(errorMessage)

  const passwordMatch = await bcryptjs.compare(password, user.password)
  if (!passwordMatch) throw new Error(errorMessage)

  return user
}

userSchema.methods.toJSON = function () {
  const { name, email } = this
  return { name, email }
}

const User = new mongoose.model('User', userSchema)

export default User
