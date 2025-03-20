let cubo = parseInt(prompt("Ingrese el cubo"))

function calcularVolumenCubo(lado) {
    return lado ** lado; 
}

let volumen = calcularVolumenCubo(4);
alert(`El volumen del cubo es: ${volumen}`);
