import { addPath } from 'app-module-path'
import restify from 'restify'
import routes from './routes'

addPath(__dirname)

const server = restify.createServer({
  name: 'mock-server',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

server.use(restify.plugins.authorizationParser())
server.use(restify.plugins.dateParser())
server.pre(restify.pre.sanitizePath())
server.pre((req, res, next) => {
  res.charSet('utf-8')
  res.cache({maxAge: 0})
  next()
})

routes(server)

server.listen(9090, () => {
  console.log('Mock server listening at %s', server.url)
})
