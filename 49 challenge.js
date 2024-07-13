// shuffle an array of string

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     // swap array[i] and array[j]
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
  return;
}

const stringArray = ["apple", "banana", "orange", "grape", "kivi"];
shuffleArray(stringArray);

console.log("Shffuled Array:", shuffleArray);
