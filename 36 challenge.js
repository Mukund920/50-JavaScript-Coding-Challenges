// create a function that converts a string to an array of characters

// function stringToArray(inputString) {
//   // Using the spread operator to convert the string to an array of characters
//   let charArray = [...inputString];
//   return charArray;
// }

function stringToArray(inputString) {
  return Array.from(inputString);
}

let inputString = "I like Javascript";
let result = stringToArray(inputString);
console.log(result);
