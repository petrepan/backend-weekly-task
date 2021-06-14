/*the algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
*/

function convertToF(celcius){ 
  let fahrenheit = celcius * 9/5 + 32;
  alert(fahrenheit)
}
convertToF(-30) // -22
convertToF(-10) // 14
convertToF(0)  // 32