// create a function that will receive an array of numbers as argument and will return a new array with distinct elements

// method - 1 - use Set to eliminate duplicate elements
function getDistinctElements(inputArray) {
  const uniqueSet = new Set(inputArray);
  console.log(uniqueSet);

  // convert the set back to an array
  const distinctArray = Array.from(uniqueSet);

  return distinctArray;
}

const Arr = [1, 2, 3, 1, 5, 6, 3, 2, 8, 9, 7, 9];
const result = getDistinctElements(Arr);
console.log(result);
