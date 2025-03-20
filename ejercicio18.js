let suma = 0; // Aquí guardamos la suma de los números
let contador = 0; // Aquí contamos cuántos números ingresaste

while (true) { // Bucle infinito que se detiene con el 0
    let numero = parseFloat(prompt("Ingrese un número (0 para terminar):")); // Pedimos un número
    
    if (numero === 0) { // Si el usuario ingresa 0, salimos del bucle
        break;
    }

    suma += numero; // Sumamos el número ingresado
    contador++; // Aumentamos el contador
}

if (contador > 0) { // Solo calculamos el promedio si se ingresaron números
    let promedio = suma / contador; // Calculamos el promedio
    console.log("El promedio de los " + contador + " números es: " + promedio.toFixed(2)); // Mostramos el promedio
} else {
    console.log("No ingresaste ningún número, no se puede calcular un promedio.");
}
