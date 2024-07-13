// create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

// method - 1 - Use filter and includes to find elements unique to each array
function symmetricDifference(arr1, arr2) {
  const uniqueArr1 = arr1.filter((num) => !arr2.includes(num));
  const resultArray = [...uniqueArr1];
  return resultArray;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = symmetricDifference(array1, array2);
console.log(result);
