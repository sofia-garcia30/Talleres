let angulo1 = parseInt(prompt("Ingrese el angulo 1: "))
let angulo2 = parseInt(prompt("Ingrese el angulo 2: "))
let angulo3 = parseInt(prompt("Ingrese el angulo 3: "))

if (angulo1 + angulo2 + angulo3 === 180) {
  
    if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
        alert(`¡Es un triángulo!`);  
    } 
} else {
    alert(`No es un triángulo. La suma de los ángulos debe ser 180 grados.`);
}