import { generateImageList } from 'entity/labelMaterial';

module.exports = (req, res, next) => {
  const { pageSize = 30, currentPage = 1 } = req.query;
  const data = generateImageList(parseInt(currentPage, 10), parseInt(pageSize, 10));
  res.send(200, data);
  next();
};
