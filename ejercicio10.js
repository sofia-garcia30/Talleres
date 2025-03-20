function eliminarVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    
    let resultado = cadena.split('').filter(letra => !vocales.includes(letra.toLowerCase())).join('');
    
    return resultado;
}

let resultado = eliminarVocales("Hola Mundo");
console.log("Cadena sin vocales:", resultado); 
