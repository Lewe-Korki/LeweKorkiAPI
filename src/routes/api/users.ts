import { Router } from 'express'

import UsersController from '@/controllers/users'
const UsersRouter: Router = Router()

UsersRouter.get('/:login', UsersController.getUserInfo)
// .put('/:login/desc', UsersController.changeDescription)
// .put('/:login/interests', UsersController.changeInterests)
// .put('/:login/education', UsersController.changeEducation)
// .put('/:login/name', UsersController.changeName)
// .put('/:login/email', UsersController.changeEmail)
// .put('/:login/dateofbirth', UsersController.changeDateOfBirth)
// .put('/:login/password', UsersController.changePassword)

export default UsersRouter
