import { isEmpty } from 'lodash'

module.exports = (req, res, next) => {
  const data = req.body
  if (!isEmpty(data) && data.id) {
    res.send(204)
  } else {
    res.send(500)
  }
  next()
}
