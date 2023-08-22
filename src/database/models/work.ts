import {
  prop,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose'

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Work {
  @prop({ required: true })
  name: string

  @prop({ required: true })
  city: string

  @prop({ required: true })
  target: string

  @prop({ required: true })
  text: string

  @prop({ required: true })
  dob: string

  @prop({ required: true })
  email: string

  @prop({ required: true })
  phone: string

  @prop({ required: true })
  fb_link: string

  @prop({ required: true })
  sciences: string[]
}

const WorkModel = getModelForClass(Work)

export default WorkModel
