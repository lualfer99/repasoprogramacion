//Realizar una función que como parametro de entrada reciba un array y como salida devuelva el array revertido
var cadenarevertida:string[] = [];
function arrev(x:string[]){
//Itero la cadena de manera inversa
for(var i = x.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  cadenarevertida.push(x[i]);
}
return cadenarevertida

}
console.log(arrev(["Pis", "Pedo", "Culo", "Caca"]));