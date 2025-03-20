function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3; // Suma las 3 notas y las divide entre 3
}

let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

for (let i = 1; i <= cantidadEstudiantes; i++) {
    let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante " + i + ":"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante " + i + ":"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante " + i + ":"));

    let promedio = calcularPromedio(nota1, nota2, nota3); // Llama a la función para calcular el promedio

    console.log("El promedio del estudiante " + i + " es: " + promedio.toFixed(2)); // Muestra el resultado con 2 decimales
}
