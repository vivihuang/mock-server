import fetch from 'isomorphic-fetch'
import test from 'ava'

import expected from '../entity/application'

test('should get data when get test url', async t => {
  t.plan(2)
  const actual = await fetch('http://localhost:9090/test')
    .then(res => {
      t.is(res.status, 200)
      return res.json()
    })
  t.deepEqual(actual, expected)
})

test('should get correct response when post for test url', async t => {
  t.plan(2)
  const actual = await fetch('http://localhost:9090/test', { method: 'POST' })
    .then(res => {
      t.is(res.status, 200)
      return res.json()
    })
  t.is(actual, 'Post successful!')
})
