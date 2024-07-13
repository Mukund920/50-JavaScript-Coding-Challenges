// create a function that willreturn a boolean specifying if a number is prime
// method 1
// check  if number is equal to 1
// const isPrime = function (n) {
//   if (n < 2) {
//     console.log(`Less than 2 is not prime number`);
//   }
//   if (n == 2) {
//     console.log(`${n} is not is prime number`);
//   }

//   // create a sqaure value of n for length
//   let maxDiv = Math.sqrt(n);
//   console.log(maxDiv);

//   for (var i = 2; i <= maxDiv; i++) {
//     if (n % i == 0) {
//       console.log(`${n} is composite number`);
//       break;
//     }
//     if (n % i == 1) {
//       console.log(`${n} is prime number`);
//       break;
//     }
//   }
// };

// method 2
const number = isPrime(parseInt(prompt("Enter a positive number")));
function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(number);
