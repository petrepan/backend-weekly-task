//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

convertToF = function convertToFahrenheit(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertToF(-30); // -> -22
  convertToF(-10); // -> 14
  convertToF(0);   // -> 32
  
  alert(convertToF(-30)) // -> -22
  alert(convertToF(-10)) // -> 14
  alert(convertToF(0));  // -> 32