// print the first 100 prime numbers

// method 1
// here we print prime numbers comes under certain limit
// const isPrime = function (n) {
//   for (let i = 2; i <= n; i++) {
//     if (i % 2 != 0) {
//       console.log(`${i} is prime number`);
//     }
//   }
// };

// const number = isPrime(parseInt(prompt("Enter a positive number")));

// method 2
// first 100 prime number that appears

//function prints the first nPrime numbers
function printPrime(nPrime) {
  var n = 0;
  var i = 2;

  while (n < nPrime) {
    if (isPrime(i)) {
      console.log(n, "-->", i);
      n++;
    }
    i++;
  }
}

// function true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (let i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const Pm = printPrime(100);
console.log(Pm);
