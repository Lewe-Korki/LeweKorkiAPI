import { Router } from 'express'

import ContactRouter from './api/contact'
import AuthRouter from './api/auth'
import UsersRouter from './api/users'

const router: Router = Router()

router.use('/contact', ContactRouter)
router.use('/auth', AuthRouter)
router.use('/users', UsersRouter)

export default router
