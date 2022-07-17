
console.log(convertNumberInRoman(90))
console.log(convertRomanInNumber('XC'))



function convertNumberInRoman(number){
  let roman = ''
  const keyRoman = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
  for (let key in keyRoman) {
    const quant = Math.trunc(number / keyRoman[key])
    roman += key.repeat(quant)
    number -= keyRoman[key] * quant
  }
  return roman;
}

function convertRomanInNumber(number){
    
 
    if(number.match(/[^I V X L C D M]/g)  === null){
        
        let sumNumber = 0
        for(let i = 0 ; i < number.length ;i++){
            let numberCurrent = stringToIntNumber(number[i]);
            let numberPre = stringToIntNumber(number[i-1]);
            if( numberCurrent <= numberPre){
                sumNumber = numberCurrent + sumNumber
            }
            else{
                sumNumber = sumNumber - ( numberPre * 2) + numberCurrent
            }
        }
        
        return sumNumber
    }
    
    return "Numero Romano inválido"
    
}


function stringToIntNumber(numberConvert){
    switch (numberConvert){
        case 'I': return 1
        case 'V': return 5
        case 'X': return 10
        case 'L': return 50
        case 'C': return 100
        case 'D': return 500
        case 'M': return 1000
        default: return null
    }
}
