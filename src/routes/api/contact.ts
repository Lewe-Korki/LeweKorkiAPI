import { Router } from 'express'
import ContactControllers from '@/controllers/contact'

const ContactRouter: Router = Router()

// eslint-disable-next-line
ContactRouter.post('/request', ContactControllers.sendRequest)

export default ContactRouter
