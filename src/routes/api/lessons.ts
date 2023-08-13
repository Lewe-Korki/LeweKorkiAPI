import { Router } from 'express'

import LessonsController from '@/controllers/lessons'
const LessonsRouter: Router = Router()

LessonsRouter.get('/:login', LessonsController.getLessons)
  .post('/:login/notes/:id', LessonsController.saveNote)
  .delete('/:login/notes/:id/:date', LessonsController.removeNote)
// .put('/:login/desc', LessonsController.changeDescription)
// .put('/:login/interests', LessonsController.changeInterests)
// .put('/:login/education', LessonsController.changeEducation)
// .put('/:login/name', LessonsController.changeName)
// .put('/:login/email', LessonsController.changeEmail)
// .put('/:login/dateofbirth', LessonsController.changeDateOfBirth)
// .put('/:login/password', LessonsController.changePassword)

export default LessonsRouter
