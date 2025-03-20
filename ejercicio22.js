function calcularPromedio(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("¡Felicidades! Has aprobado. ");
    } else {
        console.log("Lo siento, has reprobado.");
    }
}

let notasEstudiante = [7, 5, 8]; // Notas del estudiante
let promedio = calcularPromedio(notasEstudiante);
let aprobado = esAprobado(promedio);
mostrarResultado(aprobado);
