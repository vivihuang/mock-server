import { generateTodosList } from 'entity/todoList'

module.exports = (req, res, next) => {
  const { pageSize, currentPage } = req.params
  const data = generateTodosList(parseInt(pageSize, 10), parseInt(currentPage, 10))
  res.send(200, data)
  next()
}
