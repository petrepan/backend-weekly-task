//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

function convertToFahrenheit(celsius) {
    let fahrenheit = ((celsius*9)/5 + 32);
    return fahrenheit;
}

alert(convertToFahrenheit(-30));
alert(convertToFahrenheit(-10));
// convertToF(-30) // -> -22
// convertToF(-10) // -> 14