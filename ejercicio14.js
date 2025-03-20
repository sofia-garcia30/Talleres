function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido: Eres mayor de edad y tienes la estatura requerida.";
    } else if (edad < 18 && estatura > 150 && permisoParental) {
        return "Acceso permitido: Eres menor de edad, pero tienes permiso parental.";
    } else {
        return "Acceso denegado: No cumples con los requisitos.";
    }
}

console.log(permitirEntrada(20, 160, false)); // "Acceso permitido: Eres mayor de edad..."
console.log(permitirEntrada(16, 155, true));  // "Acceso permitido: Eres menor de edad..."
console.log(permitirEntrada(17, 140, true));  // "Acceso denegado..."
console.log(permitirEntrada(15, 160, false)); // "Acceso denegado..."
