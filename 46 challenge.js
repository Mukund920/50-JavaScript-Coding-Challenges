// 46-a: find the maximum number in a jagged array of numbers or array of numbers. use recursion

function findMaxJaggedArray(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if the element is an array, recursively find the maximum in its elements
      const maxInSubarray = findMaxJaggedArray(arr[i]);
      max = Math.max(max, maxInSubarray);
    } else if (typeof arr[i] === "number") {
      // if the element is a number; update the maximum if needed
      max = Math.max(max, arr[i]);
    }
    // ignore other type of elements
  }

  return max;
}

const jaggedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const resultMax = findMaxJaggedArray(jaggedArray);
console.log("Maximum in jagged Array:", resultMax);

// 46-b: find the maximum number in a jagged array of numbers or array of numbers. do not use recursion
function findMaxJaggedArray1(arr) {
  let max = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j <= arr[i].length; j++) {
        if (typeof arr[i][j] === "number") {
          max = Math.max(max, arr[i][j]);
        }
      }
    } else if (typeof arr[i] === "number") {
      max = Math.max(max, arr[i]);
    }
  }
  return max;
}

const jaggedArray1 = [-5, [2, [1, 5], -5], 0, [13, -8, [18, 2]]];
const resultMax1 = findMaxJaggedArray1(jaggedArray1);
console.log("Maximum in jagged Array:", resultMax1);

// solution 2 not recursion
let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let max = findMax(ar);
console.log("Max =", max);

// use a stack to find the maximum numeric value in an array of arrays
function findMax(arElements) {
  var max = -Infinity;
  // this is the stack on which will put the first array and then all the other sub-arrays that we find as we traverse an array
  var arrays = [];

  arrays.push(arElements);

  // loop as long as are arrays added to the stack for processing
  while (arrays.length > 0) {
    // extract an array from the stack
    ar = arrays.pop();

    // and loop through its elements
    for (var i = 0; i < ar.length; i++) {
      var el = ar[i];

      // if am element is of type array, we'll add it to stack to be processed later
      if (Array.isArray(el)) {
        arrays.push(el);
        continue;
      }
      if (el > max) {
        max = el;
      }
    }
  }
  return max;
}
