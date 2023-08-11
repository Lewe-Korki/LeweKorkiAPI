import { Router } from 'express'

import UsersControllers from '@/controllers/users'
const UsersRouter: Router = Router()

UsersRouter.get('/:login', UsersControllers.getUserInfo)
// .put('/:login/desc', UsersControllers.changeDescription)
// .put('/:login/interests', UsersControllers.changeInterests)
// .put('/:login/education', UsersControllers.changeEducation)
// .put('/:login/name', UsersControllers.changeName)
// .put('/:login/email', UsersControllers.changeEmail)
// .put('/:login/dateofbirth', UsersControllers.changeDateOfBirth)
// .put('/:login/password', UsersControllers.changePassword)

export default UsersRouter
