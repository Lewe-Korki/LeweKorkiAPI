import { Types } from 'mongoose'

// PascalCase -  required data
// camelCase -   optional data

export interface User {
  _id?: Types.ObjectId

  name: string
  fullname: string
  degree: string

  login: string
  dateOfBirth?: string | Date
  password: string

  avatarFileID?: string
  bannerFileID?: string

  city: string
  contact: {
    email?: string
    fb?: string
  }

  aboutme?: string[]
  icons?: string[]
  majors?: Major[]
  sciences?: Science[]

  isTutor: boolean

  researchInterests?: ResearchInterest[]

  students: string[]
}

export interface ResearchInterest {
  science: string
  level: number
  img: string
  description?: string
}

export interface Major {
  name: string
  since: string
  university: string
  img: string
  spec?: string
}

export interface Science {
  img: string
  name: string
}

export enum SocialMediaList {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
  YOUTUBE = 'YouTube',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  MICROSOFT = 'Microsoft',
  GITHUB = 'Github',
  DISCORD = 'Discord',
  REDDIT = 'Reddit',
  TELEGRAM = 'Telegram',
  PINTEREST = 'Pinterest',
  SPOTIFY = 'Spotify',
  LINKEDIN = 'LinkedIn',
  TWITCH = 'Twitch',
}

export enum SciencesList {
  MATH = 'Mathematics',
}

export enum ScienceLevel {
  BEGINNER = '1',
  INTERMEDIATE = '2',
  ADVANCED = '3',
  EXPERT = '4',
  MASTER = '5',
  VISIONARY = '6',
}

export interface UserQueryResponse {
  name: string
  fullname: string
  degree: string

  login: string

  avatarFileID?: string
  bannerFileID?: string

  city: string
  contact: {
    email?: string
    fb?: string
  }

  aboutme?: string
  icons?: string[]
  majors?: Major[]
  researchInterests?: ResearchInterest[]
  sciences?: Science[]

  isTutor: boolean
}
