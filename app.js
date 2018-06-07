var digits = prompt("Digite o numero do cartão:");
if (digits == ''){
	alert('Digite o numero do cartão para validar');
	parent.location="javascript:location.reload()";
}else {
	var newArray = digits.split('');
	var array = turnIntoIntegers(newArray);
	
	function turnIntoIntegers(newArray){
  	  for (var i in newArray ){
		newArray[i] = parseInt(newArray[i]);
  	  }
 	  return newArray;
	}
	
	array = array.reverse();
	var result = multiplyingAndAdding(array);
	
	function multiplyingAndAdding(array){
  	  var evenPosition = 0;
  	  var oddPosition = 0;
  	  var result;  
  	 
  	  for (i = 1; i < array.length; i++){
    	var resultForPair = array[i]*2;
    	if( resultForPair > 9){
      	  resultForPair = resultForPair - 9;
      	  evenPosition = evenPosition + resultForPair;
    	}else {
      	  evenPosition = evenPosition + resultForPair;
    	}
    	i++;
	  }
  	  
   	  for (j = 0; j < array.length; j++){
        oddPosition = oddPosition + array[j];
   		j++;
  	  }
 	  return result = evenPosition + oddPosition;
    }
	
	if ((result%10) == 0){
  	  document.getElementById("message").innerHTML = "CARTÃO VÁLIDO!";
	}else {
  	  document.getElementById("message").innerHTML = "CARTÃO INVÁLIDO!";
	}
}
