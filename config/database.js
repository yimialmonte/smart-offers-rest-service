import mongoose from 'mongoose'
import env from '../env'

export default function db() {
  mongoose.connect(env.databaseUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
}
