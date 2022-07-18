

console.log(validStringWithOperator("({})[]{{}}"))
function validStringWithOperator(stringOperator){
  
  const openOperator = ["[","{","("] 
	const closeOperator = ["]","}",")"]
  const allOperator = []
  
  let valid = true;
  
  for(let i= 0; i < stringOperator.length ; i++){
    
    openOperator.forEach(ListOperatorOpen => {
       if(stringOperator[i] === ListOperatorOpen){
         allOperator.push(ListOperatorOpen)
       }
     })
    
    closeOperator.forEach((ListOperatorClose , index) => {
       if(stringOperator[i] === ListOperatorClose){
         pos = index
          if (allOperator.length > 0 && openOperator[pos] === allOperator[allOperator.length -1]){	
              allOperator.pop() 
            } else{
              valid = false;
              return
            }
       }
     })
    
  } 

   if(!valid) return "Setença Inválida"
   if (allOperator.length === 0) return "Setença válida"
   else return "Setença Inválida"
  
  
}
  
  
