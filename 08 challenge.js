// create a function that will convert from celsius to fahrenheit
// const celsius = Number(prompt("Enter Calsius value"));
// console.log(celsius);
const converter = function (value) {
  let fahrenheit = 0;
  fahrenheit = value * 1.8 + 32;
  console.log(`${value} C in Fahrenheit is ${fahrenheit} F`);
};
let celsius = converter(Number(prompt("Enter Calsius value")));
