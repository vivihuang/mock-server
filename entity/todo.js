import faker from 'faker'
import moment from 'moment'
import { random } from 'lodash'

export default {
  content: faker.lorem.sentence().slice(0, 25),
  createdDate: moment().subtract(1, 'hours').valueOf(),
  updatedData: moment().subtract(1, 'hours').valueOf(),
  activeStatus: !!random(0, 1)
}
