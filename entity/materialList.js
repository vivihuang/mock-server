import faker from 'faker/locale/zh_CN';
import moment from 'moment';
import { random } from 'lodash';

const totalElements = random(0, 100);

const list = [];
let i = 0;
for (i; i < totalElements; i += 1) {
  list.push({
    id: faker.random.uuid(),
    fileName: `华东雨天障碍物数据2018.10.${i}`,
    type: random(0, 1) ? 'image' : 'video',
    size: random(1, 10000),
    createdDate: moment().subtract(i, 'minutes').valueOf(),
    creator: faker.name.firstName() + faker.name.lastName(),
  });
}

export const generateMaterialList = (currentPage, pageSize) => {
  const startPos = (currentPage - 1) * pageSize;
  const endPos = currentPage * pageSize;
  const content = totalElements >= startPos
    ? list.slice(startPos, endPos)
    : [];
  return { totalElements, content };
};
