import { Request, Response } from 'express'

import ContactService from '@/services/contact'
import { ContactRequest, WorkRequest } from '@/types/contact'
import { UserLoginReq } from '@/types/auth'

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
      const info = await ContactService.sendRequest(data)
      res.status(201).send(info)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }

  async getRequests(req: Request, res: Response) {
    const login = req.body.login
    const password = req.body.password
    const userData: UserLoginReq = {
      login,
      password,
    }

    try {
      const requests = await ContactService.getRequests(userData)
      res.status(200).send(requests)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }

  async sendWorkRequest(req: Request, res: Response) {
    const data: WorkRequest = {
      name: req.body.name,
      city: req.body.city,
      target: req.body.target,
      text: req.body.text,
      dob: req.body.dob,
      email: req.body.email,
      phone: req.body.phone,
      fb_link: req.body.fb_link,
      sciences: req.body.sciences,
    }

    try {
      const info = await ContactService.sendWorkRequest(data)
      res.status(201).send(info)
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
}

export default new ContactController()
