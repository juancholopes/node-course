import { sum, res, mult, div } from "./functions.mjs"; // En la especificación de importación se dice que se debe definir la extensión del archivo a utilizar aunque en common js o vite o webpack lo ocultan lo cual es mala practica porque puede generar confusión entre módulos nativos, de terceros o locales. En este caso al ser un módulo local es necesario definir la extensión .mjs para que el sistema de módulos de ES6 lo reconozca correctamente.

console.log(sum(1, 2));
console.log(res(1, 2));
console.log(mult(1, 2));
console.log(div(1, 2));
