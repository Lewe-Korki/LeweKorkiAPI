// import bcrypt from 'bcrypt'

import UserModel from '@/database/models/user'
// import AuthService from './auth'
import { UserQueryResponse } from '@/types/user'

class UsersService {
  // authService: AuthService

  // constructor() {
  // this.authService = new AuthService()
  // }

  async getUserInfo(login: string): Promise<UserQueryResponse | null> {
    const user = await UserModel.findOne({ login: login })
    if (user) {
      const safeUserData: UserQueryResponse = {
        name: user.name,
        fullname: user.fullname,
        degree: user.degree,

        login: user.login,
        avatarFileID: user.avatarFileID,
        bannerFileID: user.bannerFileID,

        city: user.city,
        contact: user.contact,

        aboutme: user.aboutme,
        icons: user.icons,
        majors: user.majors,
        sciences: user.sciences,
        researchInterests: user.researchInterests,

        isTutor: user.isTutor,
      }
      return safeUserData
    } else throw new Error('Invalid user data')
  }
  // changeDescription = async (login: string, description: string) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   user.description = description
  //   user.save()
  //   const token = this.authService.CreateToken(user)
  //   return token
  // }
  // changeInterests = async (login: string, interests: ResearchInterest[]) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   user.researchInterests = interests
  //   user.save()
  //   const token = this.authService.CreateToken(user)
  //   return token
  // }
  // changeEducation = async (login: string, education: University[]) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   user.education = education
  //   user.save()
  //   const token = this.authService.CreateToken(user)
  //   return token
  // }
  // changeName = async (
  //   login: string,
  //   password: string,
  //   name: string,
  //   surname: string
  // ) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   const verify = await bcrypt.compare(password, user.Password)

  //   if (user && verify) {
  //     user.Name = name
  //     user.Surname = surname
  //     user.save()
  //     const token = this.authService.CreateToken(user)
  //     return token
  //   } else throw new Error('Invalid password')
  // }

  // changeEmail = async (login: string, password: string, email: string) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   const verify = await bcrypt.compare(password, user.Password)

  //   if (user && verify) {
  //     user.Email = email
  //     user.save()
  //     const token = this.authService.CreateToken(user)
  //     return token
  //   } else throw new Error('Invalid password')
  // }

  // changeDateOfBirth = async (
  //   login: string,
  //   password: string,
  //   dateofbirth: string
  // ) => {
  //   const user = await UserModel.findOne({ Login: login })
  //   const verify = await bcrypt.compare(password, user.Password)

  //   if (user && verify) {
  //     user.DateOfBirth = dateofbirth
  //     user.save()
  //     const token = this.authService.CreateToken(user)
  //     return token
  //   } else throw new Error('Invalid password')
  // }
}

export default new UsersService()
