// import Validator from 'validator'
import {
  prop,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose'

import { Major, ResearchInterest, Science } from '@/types/user'

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class User {
  @prop({ required: true })
  public name!: string

  @prop({ required: true })
  public fullname!: string

  @prop({ required: true })
  public degree!: string

  @prop({ required: true, minlength: 5 })
  public login!: string

  @prop({ required: true })
  public password!: string

  // @prop({ required: true, validate: [Validator.isEmail, 'incorrect-email'] })
  // public Email!: string

  @prop()
  public city: string

  @prop()
  public contact: {
    email: string
    fb: string
  }

  @prop()
  public DateOfBirth!: string

  @prop()
  public avatarFileID?: string

  @prop()
  public bannerFileID?: string

  @prop()
  public aboutme?: string

  @prop()
  public icons?: string[]

  @prop()
  public majors?: Major[]

  @prop()
  public sciences?: Science[]

  @prop()
  public isTutor: boolean

  @prop()
  public researchInterests: ResearchInterest[]

  @prop()
  public students: string[]
}

const UserModel = getModelForClass(User)

export default UserModel
