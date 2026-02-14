function sum(n, j) {
  return n + j;
}

// module.export = sum // Esta manera exporta sum pero donde se use se puede modificar su nombre
module.exports = {
  sum,
}; // de esta manera exportammos un objeto que no puede modificar el nombre original de la función
