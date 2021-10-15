let datos = [5, 23, 12, 85];
let sumaDatos = 0;

/*
for (let i = 0; i < datos.length; i++) {
    sumaDatos += datos[i];
    alert(sumaDatos);
}
*/

/*
for (let indice in datos) {
    sumaDatos += datos[indice];
    alert(sumaDatos);
}
*/

try {
    addlert("Welcome guest!");
}
catch (err) {
    document.getElementById("demo").innerHTML = err.message
}