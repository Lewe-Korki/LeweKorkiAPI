import { Router } from 'express'

import LessonsControllers from '@/controllers/lessons'
const LessonsRouter: Router = Router()

LessonsRouter.get('/:login', LessonsControllers.getLessons)
// .put('/:login/desc', UsersControllers.changeDescription)
// .put('/:login/interests', UsersControllers.changeInterests)
// .put('/:login/education', UsersControllers.changeEducation)
// .put('/:login/name', UsersControllers.changeName)
// .put('/:login/email', UsersControllers.changeEmail)
// .put('/:login/dateofbirth', UsersControllers.changeDateOfBirth)
// .put('/:login/password', UsersControllers.changePassword)

export default LessonsRouter
