//This function takes in one number type as its parameter
//The function converts convert from Celsius to Fahrenheit.
//The formular to convert to fahrenheit is "temperature in Celsius times 9 / 5, plus 32".

 function convertToFahrenheit(celsius) {
   return (celsius * 9/5 + 32);
    
 }


alert(convertToFahrenheit(-30)); // -> -22
alert(convertToFahrenheit(-10)); // -> 14
alert(convertToFahrenheit(0)); // -> 32

