// create a function that will convert a string containing a binary number into a number

function binaryToDecimal(binaryString) {
  // use parseInt with base 2 to convert the binary string to a decimal number
  const decimalNumber = parseInt(binaryString, 2);
  return decimalNumber;
}

const binaryString = "11011100001";
const decimalNumber = binaryToDecimal(binaryString);
console.log("Decimal Number:", decimalNumber);
