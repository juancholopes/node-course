const http = require('node:http')

const processRequest = (req, res) => {
  console.log('Request recived', req.url)
  res.end('Hola mundo desde el servidor')
}

const server = http.createServer(processRequest)

// Para encontrar un puerto disponible
server.listen(0, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})

// Cuando tenemos un puerto fijo
// server.listen(3000, () => {
//   console.log('Server listening on port http://localhost:3000')
// })
