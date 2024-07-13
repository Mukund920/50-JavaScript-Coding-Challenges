// create a function that will add two indefinite size numbers
// only positive numbers will be provided to the function as strings. the result should be also returned as a string

function addIndefiniteSizeNumber(num1, num2) {
  // convert the input strings to arrays of digits
  const arr1 = num1.split("").map(Number).reverse();
  const arr2 = num2.split("").map(Number).reverse();

  const result = [];
  let carry = 0;

  // perform addition digit by digit
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  // Handle any remaining carry
  if (carry > 0) {
    result.push(carry);
  }

  // convert the result array back to a string and reverse it
  const sumString = result.reverse().join("");
  return sumString;
}

const num1 = "985642265452665741254795125";
const num2 = "12345678912347567989123456789";
const sum = addIndefiniteSizeNumber(num1, num2);
console.log("Sum:", sum);
