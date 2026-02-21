const path = require('node:path')
const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error('Error al momento de leer la carpeta', error)
    process.exit(1)
  }

  const filesPromise = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.error(`Error al leer las estadisticas ${error}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const isFile = isDirectory ? 'd' : 'f'
    const sizeFile = stats.size.toString()

    return `${isFile.padEnd(5)} ${file.padEnd(30)}  ${sizeFile.padStart(10)}Kb`
  })

  const filesInfo = Promise.all(filesPromise);

  (await filesInfo).forEach((fileInfo) => {
    console.log(fileInfo)
  })
}

ls(folder)
