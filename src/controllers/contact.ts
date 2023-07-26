import { Request, Response } from 'express'

import ContactService from '@/services/contact'
import { ContactRequest } from '@/types/contact'

class ContactController {
  async sendRequest(req: Request, res: Response) {
    const data: ContactRequest = {
      subject: req.body.subject,
      place: req.body.place,
      level: req.body.level,
      name: req.body.name,
      contact: req.body.contact,
      text: req.body.text,
    }

    try {
      await ContactService.sendRequest(data)
      res.status(201).json(data)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
}

export default new ContactController()
