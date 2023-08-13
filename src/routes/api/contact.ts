import { Router } from 'express'
import ContactController from '@/controllers/contact'

const ContactRouter: Router = Router()

ContactRouter.post('/request', ContactController.sendRequest)

export default ContactRouter
