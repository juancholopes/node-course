// const fs = require("node:fs"); // Versión sin promesas
// const { promisify } = require("node:util"); // Utilidad para cuando hay modulos que no aceptan promesas y queremos convertirlos a promesas para usar async/await
// const readFilePromise = promisify(fs.readFile) // Convertimos con la utilidad a una versión donde se pueden usar promesas no es necesario hacerlo cuando los modulos nativos ya tienen su versión con promesas pero es útil para cuando hay modulos nativos con versión de promesas

const fs = require('node:fs/promises') // Versión con promesas

console.log('Leyendo el archivo 1')
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log('Esto es el contenido del primer archivo:', text)
})

console.log('Haciendo otras cosas mientras se lee el archivo 1')

console.log('Leyendo el archivo 2')

fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log('Esto es el archivo numero 2', text)
})
