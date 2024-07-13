// create a function that will merge two arrays and return the result as a new array

// method - 1 - use the spread operator to merge the two arrayss
// const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// method - 2 - Use for loop
function mergeArrays(arr1, arr2) {
  let ar = [];

  for (let i of arr1) {
    ar.push(i);
  }

  for (let j of arr2) {
    ar.push(j);
  }
  return ar;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);
