const path = require("node:path");

console.log(path.sep);

const filePath = path.join("contend", "images", "imagen.jpg");
console.log(filePath);

const basename = path.basename("tpm/juancho/imagen.jpg");
console.log(basename);

// Quitarle la extensión y solo quedarse con el nombre
const basenameExtension = path.basename("tmp/juancho/imagen", ".jpg");
console.log(basenameExtension);

// Muy usado quedarse solo con la extensión original de un archivo
const extensionOriginal = path.extname("imagen.esto.esto.jpg");
console.log(extensionOriginal);
