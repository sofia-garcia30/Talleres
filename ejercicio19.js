let n = parseInt(prompt("Ingrese un número N:")); // Pedimos un número al usuario
let sumaCuadrados = 0; // Aquí guardamos la suma de los cuadrados

for (let i = 1; i <= n; i++) { // Desde 1 hasta N
    sumaCuadrados += i * i; // Calculamos el cuadrado y lo sumamos
}

console.log("La suma de los cuadrados de los números del 1 al " + n + " es: " + sumaCuadrados);
