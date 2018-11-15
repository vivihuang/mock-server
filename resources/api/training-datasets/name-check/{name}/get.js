import { random } from 'lodash';

module.exports = (req, res, next) => {
  const { params: { name } } = req;
  const statusCode = random(0, 1) ? 200 : 409;
  const errors =  [{
    field: "name",
    code: random(0, 1) ? "FormatInvalid" : "Duplicated",
  }]
  const body = statusCode === 200 ? { name } : { errors }
  res.send(statusCode, body);
  next();
};
