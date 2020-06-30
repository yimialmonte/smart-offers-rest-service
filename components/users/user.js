import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passsword: {
    type: String,
    required: true,
    minlength: 6
  }
})

const User = new mongoose.model('User', UserSchema)

export default User
