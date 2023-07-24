import { Request, Response } from 'express'

import ContactService from '@/services/contact'
import { Request as RequestType } from '@/types/contact'

class ContactController {
  service: ContactService

  constructor() {
    this.service = new ContactService()
  }

  async sendRequest(req: Request, res: Response) {
    const data: RequestType = {
      subject: req.body.subject,
      place: req.body.place,
      level: req.body.level,
      name: req.body.name,
      contact: req.body.contact,
      text: req.body.text,
    }

    // const query = await this.service.sendRequest(data)
    res.status(201).json(data)
  }
}

export default new ContactController()
