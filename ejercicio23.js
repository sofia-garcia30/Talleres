function generarContraseña(palabraBase) {
    let caracteresEspeciales = "!@#$%^&*";
    let numeros = Math.floor(Math.random() * 900) + 100; 
    let simbolo = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    return palabraBase.charAt(0).toUpperCase() + palabraBase.slice(1) + numeros + simbolo;
}

function imprimirContraseña(contraseña) {
    console.log(`Tu contraseña segura es: ${contraseña}`);
}

let palabraBase = "seguridad";
let contraseña = generarContraseña(palabraBase);
imprimirContraseña(contraseña);
