function contarVocales(cadena) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

let resultado = contarVocales("Hola Mundo");
console.log("Cantidad de vocales:", resultado); 
