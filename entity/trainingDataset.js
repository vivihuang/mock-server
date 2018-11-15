import faker from 'faker/locale/zh_CN';
import { random } from 'lodash';
import moment from 'moment';

import { SHARE_TYPES, TASK_TYPES } from './constants';

export default {
  id: faker.random.uuid(),
  name: `训练-华东晴天障碍物数据2018.11.${random(1, 30)}`,
  shareType: SHARE_TYPES[random(0, 2)],
  taskType: TASK_TYPES[random(0, 2)],
  size: random(1, 10000),
  createdDate: moment().format(),
}
