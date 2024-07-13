// create a function that will receive n as argument and return an array of n random numbers from 1 to n

function generateRandomArray(n) {
  const randomArray = [];

  for (let i = 0; i < n; i++) {
    // generate a random number between 1 and n (inclusive)
    const randomNumber = Math.floor(Math.random() * n) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

const n = prompt("Enter value");
const resultArray = generateRandomArray(n);
console.log("Random Array of ${n} Numbers:", resultArray);
