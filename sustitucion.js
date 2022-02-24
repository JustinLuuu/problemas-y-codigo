// Documentacion : 


function reemplazar(oracion, palabraElim, palabraAgr){
  const arrayOracion = oracion.split(" ");
  const indicePalabraElim = arrayOracion.indexOf(palabraElim);
  if(indicePalabraElim >= 0) {
    arrayOracion[indicePalabraElim] = palabraAgr;
    return arrayOracion.join(" ")
  } else {
    return `La palabra '${palabraElim}' no se encuentra en '${oracion}'`
  }
}


const resultado =
reemplazar('Pepe pela papas con un pico', 'pela', 'Justin' );

console.log(resultado);
