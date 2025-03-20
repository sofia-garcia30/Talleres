function operar(num1, num2, operacion) {
    switch (operacion.toLowerCase()) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num2 !== 0 ? num1 / num2 : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

console.log(operar(2, 5, "suma"));            // 7
console.log(operar(10, 3, "resta"));          // 7
console.log(operar(4, 6, "multiplicacion"));  // 24
console.log(operar(8, 2, "division"));        // 4
console.log(operar(8, 0, "division"));        // "Error: División por cero"
console.log(operar(5, 5, "potencia"));        // "Operación no válida"
