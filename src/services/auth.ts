import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '@/config/auth'
import UserModel from '@/database/models/user'
import { UserLoginReq } from '@/types/auth'

class AuthService {
  // Validate = async (userData: UserRegisterReq) => {
  //   const existsLogin = await UserModel.exists({ Login: userData.Login })
  //   const existsEmail = await UserModel.exists({ Email: userData.Email })
  //   if (existsLogin) {
  //     if (existsEmail) {
  //       return true
  //     } else {
  //       throw new Error('email-exist')
  //     }
  //   } else {
  //     throw new Error('user-exist')
  //   }
  // }

  // Register = async (userData: UserRegisterReq) => {
  //   try {
  //     const isValid = await this.Validate(userData)
  //     if (isValid === true) {
  //       const newUser = new UserModel(userData)
  //       const salt = await bcrypt.genSalt()
  //       newUser.Password = await bcrypt.hash(userData.Password, salt)

  //       const userResponse = await newUser.save()
  //       return userResponse
  //     }
  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // }

  async Login(loginReq: UserLoginReq) {
    const user = await UserModel.findOne({
      login: loginReq.login,
    })
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        loginReq.password,
        user.password
      )
      if (isPasswordCorrect === true) {
        return user
      } else {
        throw new Error('wrong-password')
      }
    } else {
      throw new Error('wrong-data')
    }
  }

  CreateToken = (user: string | object) =>
    jwt.sign({ user }, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn,
    })
}

export default new AuthService()
