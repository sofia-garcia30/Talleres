let n = parseInt(prompt("Ingrese un número N:")); // Pedimos un número al usuario
let suma = 0; // Variable donde guardaremos la suma

for (let i = 1; i <= n; i++) { // Desde 1 hasta N
    suma += i; // Sumamos cada número a la variable "suma"
}

console.log("La suma de los primeros " + n + " números naturales es: " + suma);
