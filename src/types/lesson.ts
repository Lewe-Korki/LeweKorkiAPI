export interface Lesson {
  tutor: string
  student: string
  lessons: string[]
  science: string
  where: string
  level: string
  note: string
  notes: Note[]
}

export interface Note {
  content: string
  date: string | Date
}
