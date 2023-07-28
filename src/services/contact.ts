import { ContactRequest } from '@/types/contact'
import { Email_Services } from '@/email/emails'
import EmailConfig from '@/config/emails'
import { ContactRequestTemplate } from '@/email/templates'
//
// import RequestModel from '@/database/models/form'

class ContactService {
  sendRequest = async (data: ContactRequest) => {
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
    console.log('success')

    // const response = await RequestModel.find().where(target).equals(filter)
  }
}

export default new ContactService()
