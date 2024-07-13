// create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
function sumJaggedArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if the element is an array, recursively calculate the sum of its elements
      sum += sumJaggedArray(arr[i]);
    } else if (typeof arr[i] === "number") {
      // if the element is a number, add it to the sum
      sum += arr[i];
    }
    // ignore other types of elements
  }

  return sum;
}

const jaggedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const resultSum = sumJaggedArray(jaggedArray);
console.log("Sum of jagged Array:", resultSum);
