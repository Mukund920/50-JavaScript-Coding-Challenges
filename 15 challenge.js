// create a function that will find the nth fibonacci number using recursion
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const data = fibonacci(prompt("enter a positive numbe"));
console.log(data);
