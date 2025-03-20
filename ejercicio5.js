function calcularFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i; 
    }
    return factorial;
}

let resultado = calcularFactorial(5);
console.log("El factorial de 5 es:", resultado); 
