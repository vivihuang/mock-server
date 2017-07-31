import faker from 'faker'
import moment from 'moment'
import { isEmpty } from 'lodash'

module.exports = (req, res, next) => {
  const data = req.body
  if (!isEmpty(data)) {
    const newData = Object.assign(data, {
      id: faker.random.uuid(),
      createdDate: moment().valueOf(),
      updatedData: moment().valueOf(),
      activeStatus: true
    })
    res.send(201, newData)
  } else {
    res.send(500)
  }
  next()
}
