let numero = parseInt(prompt("Ingresa un número:")); 

switch (numero % 2) {  
    case 0:  
        alert(`El número es par.`);
        break;
    case 1:  
    case -1:  
        alert(`El número es impar.`);
    
}
