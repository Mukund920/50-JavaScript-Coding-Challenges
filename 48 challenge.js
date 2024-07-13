// create a function to return the longest word(s) in a string

function longestWords(str) {
  // split the string into an array of words
  const words = str.split(/\s+/);
  console.log(words);

  // find the maximum length among words
  const maxLength = Math.max(...words.map((word) => word.length));
  console.log(maxLength);

  // filter the words that have the maximum length
  const longestWordsArray = words.filter((word) => word.length === maxLength);

  return longestWordsArray;
}

const inputString = "The quck brown fox jumps over the lazy dog";
const result = longestWords(inputString);
console.log("Longest Word(s):", result);
