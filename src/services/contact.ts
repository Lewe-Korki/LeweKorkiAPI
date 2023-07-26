import { ContactRequest } from '@/types/contact'
import { Email_Services } from '@/email/emails'
import EmailConfig from '@/config/emails'
//
// import RequestModel from '@/database/models/form'

class ContactService {
  sendRequest = async (data: ContactRequest) => {
    Email_Services.sendMail(
      {
        from: EmailConfig.services.user,
        to: EmailConfig.contact.user,
        subject: 'Zgłoszenie na korki',
        text: JSON.stringify(data),
      },
      function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent ' + info.response)
        }
      }
    )
    console.log('success')

    // const response = await RequestModel.find().where(target).equals(filter)
  }
}

export default new ContactService()
