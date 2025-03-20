let numero = parseInt(prompt("Ingrese un número:")); 

switch (numero % 5) { 
    case 0: 
       alert(`El número es divisible entre 5`);
        break;
    default:
       alert(`El número NO es divisible entre 5`);
}
