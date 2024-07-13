// create a function that will receive two arrays of numbers as arguments and return an array composed of all numbers that are either in the first array or second array but not in both

// method - 1 - use filter and includes to find elements unique to each array

const symmetricDifference = (arr1, arr2) => {
  const uniqueInArr1 = arr1.filter((num) => !arr2.includes(num));
  console.log(uniqueInArr1);
  const uniqueInArr2 = arr2.filter((num) => !arr1.includes(num));
  console.log(uniqueInArr2);

  const resultArray = [...uniqueInArr1, ...uniqueInArr2];
  return resultArray;
};

const array1 = [1, 20, 15, 6, 27, 8];
const array2 = [0, 5, 6, 2, 4, 1, 3, 7, 8, 9];
const result = symmetricDifference(array1, array2);
console.log(result);
