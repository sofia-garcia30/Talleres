function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(`25°C a Fahrenheit: ${celsiusToFahrenheit(25)}°F`);  // 77°F
console.log(`77°F a Celsius: ${fahrenheitToCelsius(77)}°C`);    // 25°C
