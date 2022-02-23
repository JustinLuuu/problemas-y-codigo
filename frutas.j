// documentacion de resolucion: 


const canastaFrutas = [
  "banana",
  "cereza",
  "naranja",
  "manzana",
  "cereza",
  "naranja",
  "manzana",
  "banana",
  "cereza",
  "naranja",
  "sandia"
];

const objContador = canastaFrutas.reduce((acumuladorObj, fruta) => {
  acumuladorObj[fruta] = (acumuladorObj[fruta] || 0) + 1;
  return acumuladorObj;
}, {});

console.log(objContador);

