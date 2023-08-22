import bcrypt from 'bcrypt'

import { ContactRequest, WorkRequest } from '@/types/contact'
import { Email_Services } from '@/email/emails'
import EmailConfig from '@/config/emails'
import { ContactRequestTemplate, WorkRequestTemplate } from '@/email/templates'

import RequestModel from '@/database/models/request'
import WorkModel from '@/database/models/work'
import UserModel from '@/database/models/user'

import { UserLoginReq } from '@/types/auth'

class ContactService {
  async sendRequest(data: ContactRequest) {
    const request = new RequestModel(data)
    await request.save()

    Email_Services.sendMail(
      {
        from: EmailConfig.services.user,
        to: EmailConfig.contact.user,
        subject: 'Zgłoszenie na korki',
        html: ContactRequestTemplate(data),
      },
      function (error, info) {
        if (error) {
          throw new Error(error.message)
        } else {
          return info
        }
      }
    )
  }

  async getRequests(loginReq: UserLoginReq) {
    const user = await UserModel.findOne({
      login: loginReq.login,
    })
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        loginReq.password,
        user.password
      )
      if (isPasswordCorrect === true) {
        if (user.icons?.includes('star')) {
          return await RequestModel.find({})
        } else {
          throw new Error('not-allowed')
        }
      } else {
        throw new Error('wrong-password')
      }
    } else {
      throw new Error('wrong-data')
    }
  }

  async sendWorkRequest(data: WorkRequest) {
    const request = new WorkModel(data)
    await request.save()

    Email_Services.sendMail(
      {
        from: EmailConfig.services.user,
        to: EmailConfig.contact.user,
        subject: 'Zgłoszenie do pracy',
        html: WorkRequestTemplate(data),
      },
      function (error, info) {
        if (error) {
          throw new Error(error.message)
        } else {
          return info
        }
      }
    )
  }
}

export default new ContactService()
