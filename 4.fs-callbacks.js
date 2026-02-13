const fs = require("node:fs");

console.log("Leyendo el primer archivo");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Leyendo el primer archivo", text);
});

console.log("Haciendo otras cosas mientras se lee el primer archivo");
console.log("Leyendo el segundo archivo");
fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  console.log("Este es el archivo 2", text);
});
