let rectangulo = parseInt(prompt("Ingrese el area del rectangulo"))

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let area = calcularAreaRectangulo(5, 10);
alert(`El área del rectángulo es: ${area}`);
