import jwt from 'jsonwebtoken'
import User from '../users/user'

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.decode(token, process.env.SECRET_KEY)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
    if (!user) throw new Error('')

    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ error: 'Please Authenticate' })
  }
}

export default auth;
