import { random } from 'lodash';

module.exports = (req, res, next) => {
  const { params: { name } } = req;
  const statusCode = random(0, 1) ? 200 : 400;
  const errors =  [{
    name: "Duplicated",
  }]
  const body = statusCode === 200 ? { name } : { errors }
  res.send(statusCode, body);
  next();
};
