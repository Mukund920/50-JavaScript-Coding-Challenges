// create a function that will convert from fahrenheit to calsius
const converter = function (value) {
  let calsius = 0;
  calsius = (value - 32) * (5 / 9);
  console.log(`${value} F in Fehrenheit is ${calsius.toFixed(2)} C Celsius`);
};
let fahrenheit = converter(Number(prompt("Enter Fhrenheit value")));
