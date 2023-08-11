import LessonModel from '@/database/models/lesson'
import UserModel from '@/database/models/user'
import { Lesson } from '@/types/lesson'

class LessonsService {
  async getLessons(login: string): Promise<Lesson[] | null> {
    const user = await UserModel.findOne({ login: login })

    const lessons = user.isTutor
      ? await LessonModel.find({ tutor: login })
      : await LessonModel.find({ student: login })
    return lessons
  }
}

export default new LessonsService()
