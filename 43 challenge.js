// create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number

function extractColumn(matrix, columnNumber) {
  // check if the matrix is empty or if the column number is out of bounds
  if (
    matrix.length === 0 ||
    columnNumber < 0 ||
    columnNumber >= matrix[0].length
  ) {
    return [];
  }

  // use map to extract the specified column
  return matrix.map((row) => row[columnNumber]);
}

const twoDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const columnNumber = 1; // extract the second column

const resultArray = extractColumn(twoDimArray, columnNumber);
console.log("Extracted Column:", resultArray);
