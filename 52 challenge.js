// calculate fibonacci(500) with high precision (all digits)

// const bigInt = require('big-integer');

// function fibonacci(n) {
//   let a = bigInt(0);
//   let b = bigInt(1);

//   for (let i = 2; i <= n; i++) {
//     const temp = a.add(b);
//     a = b;
//     b = temp;
//   }

//   return b;
// }

const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
