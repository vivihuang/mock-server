import moment from 'moment'
import { isEmpty } from 'lodash'

module.exports = (req, res, next) => {
  const data = req.body
  if (!isEmpty(data) && data.id) {
    const newData = Object.assign(data, {
      updatedData: moment().valueOf()
    })
    res.send(200, newData)
  } else {
    res.send(500)
  }
  next()
}
