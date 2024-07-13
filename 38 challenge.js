// Create a function that will convert an array containing ASCII codes in a string

function asciiToString(asciiArray) {
  // Using String.fromCharCode to convert ASCII codes to characters
  return String.fromCharCode.apply(null, asciiArray);
}

const asciiArray = [72, 101, 108, 108, 111];
const resultString = asciiToString(asciiArray);
console.log(resultString);
