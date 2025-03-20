function esVocal(caracter) {

    caracter = caracter.toLowerCase();

    let vocales = ['a', 'e', 'i', 'o', 'u'];

    return vocales.includes(caracter);
}

console.log(esVocal('A')); // True
console.log(esVocal('e')); // True
console.log(esVocal('z')); // False
console.log(esVocal('O')); // True
