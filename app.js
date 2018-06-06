
var digits = prompt("Digite o numero do seu cartão");
var newArray = digitos.split('');
console.log(newArray);
var array = convertingToInteger(newArray);

// Transformando dígitos em números Inteiros
function convertingToInteger(newArray){
  for (var i in newArray ){
newArray[i] = parseInt(newArray[i]);
  console.log(newArray);
  }
 return newArray;
}

array = array.reverse();

console.log(array);

