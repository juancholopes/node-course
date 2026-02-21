const http = require('node:http')
const fs = require('node:fs')

const disiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Hola Mundo Una página desde el servidor cambio en node  </h1>')
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Acerca de nosotros</h1>')
  } else if (req.url === '/image') {
    fs.readFile('./imagen.webp', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/webp')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

// Para encontrar un puerto disponible
server.listen(disiredPort, () => {
  console.log(
    `Server listening on port http://localhost:${server.address().port}`
  )
})

// Cuando tenemos un puerto fijo
// server.listen(3000, () => {
//   console.log('Server listening on port http://localhost:3000')
// })
