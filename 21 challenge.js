// rotate an array to the right 1 position
function rotateRightOne(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const lastElement = arr.pop();
  arr.unshift(lastElement);

  return arr;
}

const originalArray = [1, 2, 3, 4, 5, 6];
const rotatedArray = rotateRightOne(originalArray);
console.log(rotatedArray);
