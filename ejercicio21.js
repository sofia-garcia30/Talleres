function esPrimo(numero) {
    if (numero < 2) return false; 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; 
    }
    return true;
}

function imprimirResultado(numero) {
    if (esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}

imprimirResultado(7);  // 7 es un número primo.
imprimirResultado(10); // 10 no es un número primo.
imprimirResultado(2);  // 2 es un número primo.
