function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

console.log(determinarSigno(10));  // Salida: "El número es positivo"
console.log(determinarSigno(-5));  // Salida: "El número es negativo"
console.log(determinarSigno(0));   // Salida: "El número es cero"
