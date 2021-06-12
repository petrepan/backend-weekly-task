 convertToF = function convertToFahrenheit(celsius) {
  var fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
};

alert(convertToF(-30));
alert(convertToF(-10));
alert(convertToF(0));
