import { Router } from 'express'
import ContactController from '@/controllers/contact'

const ContactRouter: Router = Router()

ContactRouter.post('/request', ContactController.sendRequest)
  .post('/work', ContactController.sendWorkRequest)
  .post('/requests', ContactController.getRequests)

export default ContactRouter
