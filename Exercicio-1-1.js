
const arr =[[4],[1, 3],[4,4,5]];
console.log(sumValueArr(arr))

function sumValueArr(arrMatriz){
    try{
        const arrTriangle = [];
        if(3 > arrMatriz.length || arrMatriz.length > 5){
            throw new Error("Matriz invalida")
        }
        arrMatriz.forEach((item) => {
            arrTriangle.push(Math.min(...item))
        })
        return arrTriangle.reduce((accumulator, curr) => accumulator + curr);
        
    }catch(err){
        console.log(err)
    }
    
}
