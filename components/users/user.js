import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

userSchema.pre('save', async function(next) {
  const user = this

  if(!user.isModified('password')) return

  user.password = await bcryptjs.hash(user.password, 8)
  next()
})

const User = new mongoose.model('User', userSchema)

export default User
