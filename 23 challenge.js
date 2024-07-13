// reverse a string
// method 1
function reverseString(inputString) {
  // Split the string into an array of characters, reverse the array, and then join the characters back into a
  return inputString.split("").reverse().join("");
}

// method 2
// function reverseString(inputString) {
//   let str = "";
//   for (let i = inputString.length - 1; i >= 0; i--) {
//     let char = inputString[i];
//     str = str + char;
//   }
//   return str;
// }

const originalstring = "Hello, World!";
const reversedResult = reverseString(originalstring);
console.log(reversedResult);
