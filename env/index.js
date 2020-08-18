import dotenv from 'dotenv'

dotenv.config()

export default {
  databaseUrl: process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/smart-offer',
  secretKey: process.env.SECRET_KEY || 'thisisasecretkeyforjwt',
  PORT: process.env.PORT || 3000,
}
