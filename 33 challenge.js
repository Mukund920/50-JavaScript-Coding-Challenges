// calculate the sum of numbers received in a comma delimited string
function sumOfNumbers(inputString) {
  // split the input string into an array of numbers
  let numbersArray = inputString.split(",");
  console.log(numbersArray);

  // convert each string element to a numbers and sum them up
  let sum = numbersArray.reduce((accumulator, currentValue) => {
    // use parseFloat to convert the string to a number
    let number = parseFloat(currentValue.trim());
    console.log(number);

    // add the numbers to the accumalator if it's a valid number
    if (!isNaN(number)) {
      return accumulator + number;
    } else {
      return accumulator;
    }
  }, 0); // start with an initial sum of 0
  return sum;
}

let inputString = "1.5, 2.5, 3.5, 4.5";
let result = sumOfNumbers(inputString);
console.log(result);
