let respuesta = ""; // Variable para guardar la respuesta del usuario

while (respuesta !== "S" && respuesta !== "s") { // Mientras NO sea "S" o "s"
    respuesta = prompt("¿Deseas salir? (S/N)"); // Pregunta al usuario
}

console.log("Has salido del programa.");
