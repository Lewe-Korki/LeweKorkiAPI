import nodemailer from 'nodemailer'
import config from '@/config/emails'

export const Email_Services = nodemailer.createTransport({
  host: 'mail59.mydevil.net',
  port: 465,
  auth: config.services,

  tls: {
    rejectUnauthorized: false,
  },
  secure: true,
})
