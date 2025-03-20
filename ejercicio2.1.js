let producto = prompt("Introduce un producto: lentejas, crema, arroz, vino");

producto = producto.toLowerCase();

switch (producto) {
    case "lentejas":
    case "arroz":
        alert(`no paga IVA.`);
        break;
    case "vino":
    case "crema":
        alert(`paga IVA.`);
        break;
    default:
        alert(`Producto no reconocido`);
        break;
}