import User from './user'

const register = async(req, res) => {
  try {
    const user = new User(req.body)
    await user.save()

    res.status(201).send({ user })
  }
  catch (error) {
   res.status(5000).send(error)
  }
}

export default {
  register
}
