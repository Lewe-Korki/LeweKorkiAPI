import * as dotenv from 'dotenv'
dotenv.config()

const email = {
  service: {
    user: process.env.EMAIL_SERVICES_USER,
    pass: process.env.EMAIL_SERVICES_PASSWORD,
  },
}

export default email
