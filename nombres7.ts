//Realizar un procedimiento que reciba un array de nombres
//y te devuelva verdadero si y solo todos los nombres empiezan por M
function nombresmayus(nombres: string[]) {
    // let array2:string[] = ["Rojo", "Amarillo", "Verde", "Azul", "Violeta"]
    let tu:boolean=true;
    let i = 0
    while (tu && i < nombres.length) {
        if(nombres[i][0] != "M"){
            tu = false;
        }
        i++

        
        
    }
    return tu
      

}
console.log(nombresmayus(["Maria", "Marcos", "Mricon", "Modelo", "Marta", "Mamona"]));