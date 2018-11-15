import { isEmpty } from 'lodash'

import trainingDataset from 'entity/trainingDataset'

module.exports = (req, res, next) => {
  const data = req.body
  if (!isEmpty(data)) {
    res.send(201, trainingDataset)
  } else {
    res.send(400)
  }
  next()
}
