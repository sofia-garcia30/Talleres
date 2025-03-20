let suma = 0; // Variable para guardar la suma de los números

for (let i = 1; i <= 10; i++) { // Se repite 10 veces
    let numero = parseFloat(prompt("Ingrese el número " + i + ":")); // Pedimos un número al usuario
    suma += numero; // Sumamos el número ingresado
}

let promedio = suma / 10; // Calculamos el promedio dividiendo la suma entre 10
console.log("El promedio de los 10 números es: " + promedio.toFixed(2)); // Mostramos el promedio con 2 decimales
