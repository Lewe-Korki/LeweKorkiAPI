import { Request, Response } from 'express'

import LessonsService from '@/services/lessons'
import { UseAuthorization } from '@/middlewares/auth'

class LessonsController {
  @UseAuthorization()
  async getLessons(req: Request, res: Response) {
    const login = req.params.login
    try {
      const lessons = await LessonsService.getLessons(login)
      res.status(200).send(lessons)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  async saveNote(req: Request, res: Response) {
    const id = req.params.id
    const note = { content: req.body.content, date: req.body.date }
    try {
      await LessonsService.saveNote(note, id)
      res.status(204).send('done')
    } catch (err) {
      res.status(400).send(err)
    }
  }

  async removeNote(req: Request, res: Response) {
    const id = req.params.id
    const date = req.params.date
    try {
      await LessonsService.removeNote(date, id)
      res.status(204).send('done')
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default new LessonsController()
