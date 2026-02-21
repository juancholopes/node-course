const path = require('node:path')
const fs = require('node:fs/promises')

const folder = process.argv[2]

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error('Error al momento de leer la carpeta', error)
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.error(`Error al leer las estadisticas ${error}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const sizeFile = stats.sizeFile()
    const extention = stats.extention()
  })
}

module.exports = ls()
