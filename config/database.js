import mongoose from 'mongoose'

export default function db() {
  mongoose.connect('mongodb://127.0.0.1:27017/smart-offer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
}
