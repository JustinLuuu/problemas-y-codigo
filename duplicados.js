// Documentacion :

const numeros = [1,1,2,3, 2,4,5,6];

let resultado = [];
numeros.forEach((num)=> {
     if(resultado.indexOf(num) < 0) {
         resultado.push(num);
     }
});



console.log(resultado)
