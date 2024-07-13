// calculate the sum of digits of positive integer number

function sumDigits(n) {
  let numArr = n.toString().split("");

  let sum = numArr.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  }, 0);
  return sum;
}

const data = prompt("Enter a positive number: ");
console.log(sumDigits(data));
