import { Router } from 'express'

import ContactRouter from './api/contact'
import AuthRouter from './api/auth'
import UsersRouter from './api/users'
import LessonsRouter from './api/lessons'

const router: Router = Router()

router.use('/contact', ContactRouter)
router.use('/auth', AuthRouter)
router.use('/users', UsersRouter)
router.use('/lessons', LessonsRouter)

export default router
