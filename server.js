import restify from 'restify'
import routes from './routes'

const server = restify.createServer({
  name: 'mock-server',
  version: '1.0.0'
})

server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.use(restify.authorizationParser())
server.use(restify.dateParser())
server.use(restify.CORS())
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
