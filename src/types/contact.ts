export interface ContactRequest {
  subject: string
  place: string
  name: string
  level: string
  text: string
  contact: string
}

export interface WorkRequest {
  name: string
  city: string
  target: string
  text: string
  dob: string
  email: string
  phone: string
  fb_link: string
  sciences: string[]
}
