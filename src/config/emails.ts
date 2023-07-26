import * as dotenv from 'dotenv'
dotenv.config()

const email = {
  services: {
    user: process.env.EMAIL_SERVICES_USER,
    pass: process.env.EMAIL_SERVICES_PASSWORD,
  },
  contact: {
    user: process.env.EMAIL_CONTACT_USER,
    pass: process.env.EMAIL_CONTACT_PASSWORD,
  },
}

export default email
