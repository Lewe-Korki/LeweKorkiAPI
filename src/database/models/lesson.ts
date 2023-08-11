import {
  prop,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose'

// import { Major, ResearchInterest, Science } from '@/types/user'

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Lesson {
  @prop({ required: true })
  public tutor: string

  @prop({ required: true })
  public student: string

  @prop({ required: true })
  public lessons: string[]

  @prop({ required: true })
  public science: string

  @prop({ required: true })
  public where: string

  @prop({ required: true })
  public level: string

  @prop({ required: true })
  public note: string
}

const LessonModel = getModelForClass(Lesson)

export default LessonModel
