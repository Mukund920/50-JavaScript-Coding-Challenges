// deep copy a jagged array with numbers or other arrays in a new arrays
function deepCopyJaggedArray(arr) {
  const copy = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if the element is an array, recursively deep copy it
      copy[i] = deepCopyJaggedArray(arr[i]);
    } else {
      // if the element is a primitive value, just assign it
      copy[i] = arr[i];
    }
  }
  return copy;
}

const jaggedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const copiedArray = deepCopyJaggedArray(jaggedArray);

console.log("Original Jagged Array:", jaggedArray);
console.log("Deep Copied Jagged Array:", copiedArray);
