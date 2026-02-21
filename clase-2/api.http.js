const http = require('node:http')
const contend = require('./pokemon/content.json')

const disiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(contend))
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Página no encontrada</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon/ditto': {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
            const data = JSON.parse(body)
            data.timestamp = new Date().toISOString()
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Página no encontrada</h1>')
      }
      break
  }
}

const server = http.createServer(processRequest)

server.listen(disiredPort, () => {
  console.log(
    `Server listening on port http://localhost:${disiredPort}`
  )
})
