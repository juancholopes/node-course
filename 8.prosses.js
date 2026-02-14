// Process es un objeto que representa el proceso actual del programa.
const { argv } = require("node:process");

argv.forEach((val, argv) => {
  console.log(val, argv);
});
