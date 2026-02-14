const http = require('node:http')
const { findAvalaiblePort } = require('./functions')

const server = http.createServer((req, res) => {
  console.log('Request recived')
  res.end('Hola mundo desde el servidor')
})

findAvalaiblePort(8080).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})

// // Para encontrar un puerto disponible
// server.listen(0, () => {
//   console.log(`Server listening on port http://localhost:${server.address().port}`)
// })

// Cuando tenemos un puerto fijo
// server.listen(3000, () => {
//   console.log('Server listening on port http://localhost:3000')
// })
