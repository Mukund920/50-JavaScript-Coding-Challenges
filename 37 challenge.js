// createa a function that will convert a string in an array containing the ASCII codes of each characters

function stringToAsciiArray(inputString) {
  // Using the map function to cover each character to its ASCII code
  // let strArray = inputString.split("");
  // console.log(strArray);
  let asciiArray = inputString.split("").map((char) => char.charCodeAt(0));
  return asciiArray;
}

let inputString = "Hello";
let result = stringToAsciiArray(inputString);
console.log(result);
