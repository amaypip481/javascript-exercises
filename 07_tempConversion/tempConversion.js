const CELCIUS_MULTIPLIER = (9/5);
const CELCIUS_ADDITION = 32;
const DECIMAL_MULTIPLIER = 10;

const convertToCelsius = function(fahrenheitTemp) {
  let celciusTemp = (fahrenheitTemp - CELCIUS_ADDITION)/CELCIUS_MULTIPLIER;
  celciusTemp = Math.round(celciusTemp*DECIMAL_MULTIPLIER)/DECIMAL_MULTIPLIER;
  return celciusTemp;
};



const convertToFahrenheit = function(cleciusTemp) {
  let fahrenheitTemp = (cleciusTemp*CELCIUS_MULTIPLIER) + CELCIUS_ADDITION;
  fahrenheitTemp = Math.round(fahrenheitTemp*DECIMAL_MULTIPLIER)/DECIMAL_MULTIPLIER;
  return fahrenheitTemp;
};

console.log(convertToCelsius(89.6));
console.log(convertToFahrenheit(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
