
function reemplazar(oracion, palabraElim, palabraAgr){
  const arrayOracion = oracion.split(" ");
  const indicePalabraElim = arrayOracion.indexOf(palabraElim);

  return indicePalabraElim >=0 ? 
  arrayOracion.reduce((ac, palabra, indiceElemento)=> {
    ac+= ` ${(indiceElemento === indicePalabraElim) ? palabraAgr : palabra}`;

    return ac;
  }, '').trim() 
  :
  `La palabra '${palabraElim}' no se encuentra en '${oracion}'`
}


const nuevaCadena =
reemplazar('Pepe pela papas con un pico', 'Pepe', 'Justin' );

console.log(nuevaCadena);

