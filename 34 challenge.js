// create a function that will return an array with words inside a text
function extractWords(text) {
  // using regular expresion to split the text into an array of words
  let wordsArray = text.split(/\s+/);

  //filtering an empty strings from the array
  wordsArray = wordsArray.filter((word) => word !== "");

  return wordsArray;
}

let inputText = "This is a sample text.";
let result = extractWords(inputText);
console.log(result);
