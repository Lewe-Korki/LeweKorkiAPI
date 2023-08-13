import { Router } from 'express'
import AuthController from '@/controllers/auth'

const UsersRouter: Router = Router()

UsersRouter.post('/login', AuthController.Login)
  // .post('/register', AuthControllers.Register)
  .get('/logout', AuthController.Logout)

export default UsersRouter
