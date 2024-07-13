// create a function that will return an array the first "nPrimes" prime numbers greater than a number "startAt"
// method - 1
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimes(n, startAt) {
  const prime = [];
  let currentNumber = startAt;

  while (prime.length < n) {
    if (isPrime(currentNumber)) {
      prime.push(currentNumber);
    }
    currentNumber++;
  }
  return prime;
}

const nPrimes = 5;
const startAt = 10;
const result = findPrimes(nPrimes, startAt);
console.log(result);
