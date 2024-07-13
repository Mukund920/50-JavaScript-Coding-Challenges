// reverse an
// method 1
// function reverseArray(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let arr2 = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr2.push(arr[i]);
//   }
//   return arr2;
// }

// method 2
function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
