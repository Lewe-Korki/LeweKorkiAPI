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
}

export default new LessonsController()
