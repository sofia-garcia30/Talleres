let producto = prompt("Introduce un producto: lentejas, crema, arroz, vino");

producto = producto.toLowerCase();

if (producto === "lentejas" || producto === "arroz") {
alert(` no paga IVA.`);
} else if (producto === "vino" || producto === "crema") {
alert(`paga IVA`);
} else {
alert("Producto no reconocido.");
}