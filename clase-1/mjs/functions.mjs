// Directamente exportamos las funciones sin tener que llamar a module.exports y sin tener que envolverlas en un objeto, lo que hace que el código sea más limpio y fácil de leer. Además, al usar export, cada función se puede importar individualmente en otros archivos, lo que mejora la modularidad y la reutilización del código.

export function sum(n, j) {
  return n + j;
}

export function res(n, j) {
  return n - j;
}

export function mult(n, j) {
  return n * j;
}

export function div(n, j) {
  return n / j;
}
