

const CadaPalabraMayuscula = (string)=>  {
  const splitWords = string.split(' ');
  const newString = splitWords.reduce((acc, word) =>  {
    acc+= word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    return acc;
  }, '');
  return newString;
}


console.log(CadaPalabraMayuscula(
  'hola como estan'
))
