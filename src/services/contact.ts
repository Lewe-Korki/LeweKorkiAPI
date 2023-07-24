// import { FormRequest } from '@/types/sciences'
//
// import RequestModel from '@/database/models/form'

class ContactController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendRequest = async (data: any) => {
    // const response = await RequestModel.find().where(target).equals(filter)
    return 'HELLO WORLD' + data
  }
}

export default ContactController
