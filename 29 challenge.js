// print the distance between the first 100 prime numbers

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function calculateDistance(n) {
  const primes = [];
  let currentNumber = 2;

  while (primes.length < n) {
    if (isPrime(currentNumber)) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }

  // calculate the distance between consecutive prime numbers
  const distance = [];
  for (let i = 1; i < primes.length; i++) {
    distance.push(primes[i] - primes[i - 1]);
  }
  return distance;
}

const distanceOfPrime = calculateDistance(100);
console.log("Distances between consecutive prime numbers", distanceOfPrime);
