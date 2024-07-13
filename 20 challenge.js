// rotate an array to the left 1 position

function rotateLeftOne(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const firstElment = arr.shift();
  arr.push(firstElment);

  return arr;
}

const originalArray = [1, 2, 3, 4, 5, 6];
const rotateArray = rotateLeftOne(originalArray);
console.log(rotateArray);
