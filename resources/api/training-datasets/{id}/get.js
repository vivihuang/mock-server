import trainingDataset from 'entity/trainingDataset'

module.exports = (req, res, next) => {
  const id = req.params.id
  res.send(200, Object.assign(trainingDataset, { id }))
  next()
}
