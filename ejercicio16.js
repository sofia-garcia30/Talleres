function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") {
            descuento = 0.30; // 30% de descuento con efectivo
        } else if (medioPago === "D") {
            descuento = 0.20; // 20% de descuento con débito
        } else if (medioPago === "C") {
            descuento = 0.10; // 10% de descuento con crédito
        }
    } else if (monto > 400) {
        descuento = 0.40; // 40% de descuento para montos mayores a $400
    }

    let montoFinal = monto - (monto * descuento);
    return `Monto final a pagar: $${montoFinal.toFixed(2)}`;
}

console.log(facturacion(150, "E"));  // "Monto final a pagar: $150.00" (sin descuento)
console.log(facturacion(250, "E"));  // "Monto final a pagar: $175.00" (30% descuento)
console.log(facturacion(350, "D"));  // "Monto final a pagar: $280.00" (20% descuento)
console.log(facturacion(400, "C"));  // "Monto final a pagar: $360.00" (10% descuento)
console.log(facturacion(500, "C"));  // "Monto final a pagar: $300.00" (40% descuento)
