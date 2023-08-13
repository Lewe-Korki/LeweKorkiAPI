import LessonModel from '@/database/models/lesson'
import UserModel from '@/database/models/user'
import { Lesson, Note } from '@/types/lesson'

class LessonsService {
  async getLessons(login: string): Promise<Lesson[] | null> {
    const user = await UserModel.findOne({ login: login })

    const lessons = user.isTutor
      ? await LessonModel.find({ tutor: login })
      : await LessonModel.find({ student: login })
    return lessons
  }

  async saveNote(note: Note, _id: string): Promise<void> {
    const lesson = await LessonModel.findOne({ _id })
    lesson.notes.push(note)
    lesson.save()
  }

  async removeNote(date: string, _id: string): Promise<void> {
    const lesson = await LessonModel.findOne({ _id })
    lesson.notes = lesson.notes.filter((e) => e.date != date)
    lesson.save()
  }
}

export default new LessonsService()
