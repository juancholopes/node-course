const fs = require("node:fs/promises"); // Versión con promesas
// const {readFile} = require('node:fs/promise) // Si solo nos queremos traer lo que se va a usar del modulo nativo

// SI SE EJEECUTA ESTO DARA UN ERROR PORQUE COMMON JS NO TRABAJA CON ASYNC AWAY PARA SOLUCIONARLO ES MEJOR CON MJS ES MODULES O SI NO ENVOLVER TODO EL CODIGO EN UNA IIFE (FUNCIÓN AUTOINVOCADA)
// console.log("Leyendo el archivo 1");
// const text1 = await readFile("./archivo.txt", "utf-8");
// console.log("Esto es el contenido del primer archivo:", text1);

// console.log("Haciendo otras cosas mientras se lee el archivo 1");

// console.log("Leyendo el archivo 2");
// const text2 = await readFile("./archivo2.txt", "utf-8");
// console.log("Esto es el archivo numero 2", text2);

// VERSION CON LA FUNCIÓN AUTOINVOCADA
// IIFE - Inmediatly Invoked Funcion Expressión


async function readFiles(){
  console.log("Leyendo el archivo 1");
  const text1 = await fs.readFile("./archivo.txt", "utf-8");
  console.log("Esto es el contenido del primer archivo:", text1);

  console.log("Leyendo el archivo 2");
  const text2 = await fs.readFile("./archivo2.txt", "utf-8");
  console.log("Esto es el archivo numero 2", text2);
}

readFiles();

// Esto es lo mismo que hacer una función asíncrona y luego llamarla con una arrow function
// (async () => {
//   console.log("Leyendo el archivo 1");
//   const text1 = await fs.readFile("./archivo.txt", "utf-8");
//   console.log("Esto es el contenido del primer archivo:", text1);

//   console.log("Leyendo el archivo 2");
//   const text2 = await fs.readFile("./archivo2.txt", "utf-8");
//   console.log("Esto es el archivo numero 2", text2);
// })();
