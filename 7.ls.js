const fs = require("node:fs/promises");

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

// FOMAR CON PROMESAS
fs.readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Se encontró un error al leer el archivo", err);
      return;
    }
  });
