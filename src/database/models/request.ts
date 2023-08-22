import {
  prop,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose'

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Request {
  @prop({ required: true })
  public subject: string

  @prop({ required: true })
  public place: string

  @prop({ required: true })
  public name: string

  @prop({ required: true })
  public level: string

  @prop({ required: true })
  public text: string

  @prop({ required: true })
  public contact: string
}

const RequestModel = getModelForClass(Request)

export default RequestModel
