import todo from 'entity/todo'

module.exports = (req, res, next) => {
  const id = req.params.id
  res.send(200, Object.assign(todo, { id }))
  next()
}
