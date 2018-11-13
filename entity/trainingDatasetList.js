import faker from 'faker/locale/zh_CN';
import moment from 'moment';
import { random } from 'lodash';

const SHARE_TYPES = ['group', 'public', 'tenant'];
const TASK_TYPES = ['targetSelection', 'imageClassification', 'imageSegmentation'];

const totalElements = random(0, 100);

const list = [];
let i = 0;
for (i; i < totalElements; i += 1) {
  list.push({
    id: faker.random.uuid(),
    name: `训练-华东晴天障碍物数据2018.11.${i}`,
    shareType: SHARE_TYPES[random(0, 2)],
    taskType: TASK_TYPES[random(0, 2)],
    size: random(1, 10000),
    createdDate: moment().subtract(i, 'minutes').format(),
  });
}

export const generateTrainingDatasetList = (currentPage, pageSize) => {
  const startPos = (currentPage - 1) * pageSize;
  const endPos = currentPage * pageSize;
  const content = totalElements >= startPos
    ? list.slice(startPos, endPos)
    : [];
  return { totalElements, content };
};
