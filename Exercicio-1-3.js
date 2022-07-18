
console.log(convertStringInNumber('999'));

function convertStringInNumber(number){
  if(!number) return 'Passe uma string para validar'
  if(validString(number)){
     //retira todos os espaços da string que vai se transformar em numero
     let numberWithoutSpace =  parseInt(number.replace(/\s+/g, ''));  
    	//Valida um inteiro safe
    	if(Number.isSafeInteger(numberWithoutSpace)) return numberWithoutSpace
      else return 'Numero Inválido'
        
  }else {
    return 'Numero Inválido'
  }
}

function validString(number){

  ////retorna false se tiver letra(invalida a função)
  if(number.match(/[a-zA-Z,.]/g)) return false
  
  for(let i=0 ; i < number.length ; i++){
    //Validando se não tem mais de um sinal de + ou de -
    if(i > 1 && (number[i] === '+' || number[i] === '-')) return false

  }
  return true;
}
