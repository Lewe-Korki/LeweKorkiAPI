import { Request, Response } from 'express'
import config from '@/config/auth'
import AuthService from '@/services/auth'
import { UserLoginReq } from '@/types/auth'

class AuthController {
  // async Register(req: Request, res: Response) {
  //   const userData: UserRegisterReq = {
  //     Name: req.body.Name,
  //     Surname: req.body.Surname,
  //     Login: req.body.Login,
  //     Email: req.body.Email,
  //     DateOfBirth: req.body.DateOfBirth,
  //     Degree: req.body.Degree,
  //     Password: req.body.Password,
  //     avatarFileID: 'default',
  //     bannerFileID: 'default',
  //     isEmailPublic: false,
  //     isAgePublic: false,
  //   }
  //   try {
  //     const user = await AuthService.Register(userData)
  //     const token = await AuthService.CreateToken(user)
  //     res.cookie('jwt', token, {
  //       maxAge: Number(config.jwt.expiresIn),
  //     })
  //     res.status(201).json({ user: user._id })
  //   } catch (e) {
  //     res.status(422).send(e.message)
  //   }
  // }
  async Login(req: Request, res: Response) {
    const login = req.body.login
    const password = req.body.password
    const userData: UserLoginReq = {
      login,
      password,
    }
    try {
      const user = await AuthService.Login(userData)
      const token = await AuthService.CreateToken(user)
      res.cookie('jwt', token, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).json({ user: user._id })
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
  async Logout(req: Request, res: Response) {
    res.cookie('jwt', '', {
      maxAge: 1,
    })
    res.status(200).send('Hello, how are you?')
  }
}

export default new AuthController()
