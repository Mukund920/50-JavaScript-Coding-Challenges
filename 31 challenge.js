// create a function that will return the number of words in a text

function countwords(text) {
  // use regular expression to match words (sequences of characters separated by spaces)
  const wordMatches = text.match(/\b\w+\b/g);

  // return the count of matched words
  return wordMatches ? wordMatches.length : 0;
}

const sampleText = "This is an example sentence.";
// const sampleText = "";
// const sampleText = "                 ";
// const sampleText = "javascript !!!  ! ";
// const sampleText = "              scope with it";
const numberOfWords = countwords(sampleText);
console.log(numberOfWords);
