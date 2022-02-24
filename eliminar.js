// Documentacion : 

function eliminarCar(cadena, caracterElim){
  if(cadena.indexOf(caracterElim) >= 0) {
    return cadena.split('')
    .filter(c => c !== caracterElim)
    .join("");
  }
  return `el caracter ${caracterElim} no se encuentra en ${cadena}`;
}


const resultado =
eliminarCar('Saludos', 'o');

console.log(resultado);
