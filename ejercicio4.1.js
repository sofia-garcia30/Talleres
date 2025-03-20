let angulo1 = parseInt(prompt("Ingrese el angulo 1: "))
let angulo2 = parseInt(prompt("Ingrese el angulo 2: "))
let angulo3 = parseInt(prompt("Ingrese el angulo 3: "))

switch (true) {
    case (angulo1 + angulo2 + angulo3 !== 180):
        alert(`No es un triángulo. La suma de los ángulos debe ser 180 grados.`);
        break;

    default:
        alert(`¡Es un triángulo!`);
}