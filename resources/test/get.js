import application from 'entity/application'

module.exports = (req, res, next) => {
  res.send(200, application)
  next()
}
