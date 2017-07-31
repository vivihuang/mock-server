import faker from 'faker/locale/zh_CN'
import moment from 'moment'
import { random } from 'lodash'

const totalElements = random(0, 100)

export const generateTodosList = (pageSize, currentPage) => {
  const currentPageSize = totalElements >= pageSize * currentPage
    ? pageSize
    : totalElements - pageSize * (currentPage - 1)
  const list = []
  let i = 0
  for(i; i < currentPageSize; i += 1) {
    list.push({
      id: faker.random.uuid(),
      content: faker.lorem.sentence().slice(0, 25),
      createdDate: moment().subtract(i, 'minutes').valueOf(),
      updatedData: moment().subtract(i, 'minutes').valueOf(),
      activeStatus: !!random(0, 1)
    })
  }
  return { totalElements, content: list }
}
