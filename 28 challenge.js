// calculate the sum of first 100 prime numbers

// print the first 100 prime numbers
// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printFirstNPrimes(n) {
//   const primes = [];
//   let currentNumbers = 2;

//   while (primes.length < n) {
//     if (isPrime(currentNumbers)) {
//       primes.push(currentNumbers);
//     }
//     currentNumbers++;
//   }
//   console.log(primes);
// }

// printFirstNPrimes(100);

// calculate the sum of first 100 prime numbers
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfFirstNPrimes(n) {
  const primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  // Calculate the sum of the prime numbers
  const sum = primes.reduce((acc, prime) => acc + prime, 0);

  return sum;
}

// Calculate and print the sum of the first 100 prime numbers
const sumOfPrimes = sumOfFirstNPrimes(100);
console.log("Sum of the first 100 prime numbers:", sumOfPrimes);
