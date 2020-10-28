//Realizar una función que imprima los números impares existentes hasta el numero indicado como parámetro e entrada
function nImp(x:number):number[]{
    var suma:number[] = [];
    for (let i=0; i<x; i++){
      if (i%2 !== 0) {
        suma.push(i)
        
      }
    }
    return suma
  }
  
console.log(nImp(100));