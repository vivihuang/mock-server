import faker from 'faker/locale/zh_CN';
import moment from 'moment';
import { random } from 'lodash';

const totalElements = random(1, 100);

const list = [];
let i = 0;
for (i; i < totalElements; i += 1) {
  list.push({
    id: faker.random.uuid(),
    name: `华东雨天障碍物图片2018.10.${i}`,
    type: 'image',
    createdDate: moment().subtract(i, 'minutes').format(),
    url: faker.image.imageUrl(),
  });
}

const generateImages = (currentPage, pageSize) => {
  const startPos = (currentPage - 1) * pageSize;
  const endPos = currentPage * pageSize;
  const content = totalElements >= startPos
    ? list.slice(startPos, endPos)
    : [];
  return content;
};

export const generateImageList = (currentPage, pageSize) => ({
  total: totalElements,
  content: generateImages(currentPage, pageSize)
});
