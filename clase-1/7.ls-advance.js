const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files

  // Primero buscamos los archivos en el directorio
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(`No se pudo leer la carpeta ${folder}`)
    process.exit(1)
  }

  const filesPromise = files.map(async (file) => {
    const filePath = path.join(folder, file)

    let stats

    try {
      stats = await fs.stat(filePath) // Información del archivo como tamaño, fecha de creación, etc.
    } catch (err) {
      console.error(
        `No se pudo encontrar información sobre el archivo ${filePath}`
      )
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const lastModified = stats.mtime.toLocaleString()

    return `${pc.green(fileType)} ${pc.blue(file.padEnd(20))} ${pc.yellow(fileSize.padStart(10))} ${lastModified}`
  })

  const filesInfo = Promise.all(filesPromise);

  (await filesInfo).forEach((fileInfo) => {
    console.log(fileInfo)
  })
}

ls(folder)

// HACERLO CON CALLBACKS
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.log("Ha hábido un error:", err);
//     return;
//   }

//   console.log(
//     files.forEach((file) => {
//       console.log(file);
//     }),
//   );
// });

// // FOMAR CON PROMESAS
// fs.readdir(".")
//   .then((files) => {
//     files.forEach((file) => {
//       console.log(file);
//     });
//   })
//   .catch((err) => {
//     if (err) {
//       console.error("Se encontró un error al leer el archivo", err);
//       return;
//     }
//   });
