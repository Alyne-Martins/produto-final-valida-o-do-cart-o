
var digitos = prompt("Digite o numero do seu cartão");
var newArray = digitos.split('');
console.log(newArray);
var array = inverter(newArray);



// Transformando array  em inteiros
function inverter(newArray){
  for (var i in newArray ){
newArray[i] = parseInt(newArray[i]);
  console.log(newArray);
  }
 return newArray;
}

array = array.reverse();
var teste = multiplying(array);

function multiplying(array){
  var par = [];
  var impar = [];
  console.log(array);
  for (i = 1; i < array.length; i++){
  par.push(array[i]);
  console.log(array[i]);
   i++;
  }
  console.log(par);
   for (j = 0; j < array.length; j++){
  impar.push(array[j]);
  console.log(array[j]);
   j++;
  }
 console.log(impar);
}