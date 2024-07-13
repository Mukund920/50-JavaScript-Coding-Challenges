// create a function that will capitalize the letter of each word in a text

function capitalizeWords(text) {
  // split the text into an array of words
  let words = text.split(" ");

  // capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  // join the words back into a sentance
  let capitalizedText = words.join(" ");

  return capitalizedText;
}

const inputText = "hello world";
const result = capitalizeWords(inputText);
console.log(result);
