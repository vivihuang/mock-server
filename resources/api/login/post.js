module.exports = (req, res, next) => {
  res.send(200, 'Login successful!')
  next()
}
