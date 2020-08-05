import User from './user'

const registerController = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()

    res.status(201).send({ user })
  } catch (error) {
    res.status(500).send(error)
  }
}

const loginController = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findUserByCredencials(email, password)
    const token = await user.generateToken()
    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
}

export { registerController, loginController }
