export interface UserLoginReq {
  login: string
  password: string
}

export interface UserRegisterReq {
  Name: string
  Surname: string
  Login: string
  Email: string
  DateOfBirth: string
  Degree: string
  Password: string

  avatarFileID?: string
  bannerFileID?: string

  isEmailPublic?: boolean
  isAgePublic?: boolean
}
