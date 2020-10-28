//Realizar una funcion que te imprima por consola el siguiente mensaje:
//El numero es par si el numero introducido como parametro de entrada es par
//El numero es impar si el numero introducido como parametro de entrada es impar.
function parimpar(n) {
    var mensaje = "";
    for (var i = 1; i < n; i++) {
        if (i % 2 !== 0) {
            mensaje = "Es par";
        }
        else {
            mensaje = "NO ES PAR";
        }
    }
    return mensaje;
}
console.log(parimpar(9));
