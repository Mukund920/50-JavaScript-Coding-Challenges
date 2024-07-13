// calculate the sum of numbers in an array of numbers
let grp = [2, 3, -1, 5, 7, 9, 10, 15, 95];

////////////////////////////////////////////////////
// use for loop
// create a variable for the sum and initialize it
// let sum = 0;
// iterate over each item in the array
// for (i = 0; i < grp.length; i++) {
// sum = sum + grp[i];
// }
// console.log(sum);

/////////////////////////////////////////////////////
// forEach() method, It iterates over an array and calls a function for each item.
// create a variable for the sum and initialize it
// let sum = 0;
// calculate sum using forEach() method
// grp.forEach((item) => {
//   sum = sum + item;
// // });

// console.log(sum);

/////////////////////////////////////////////////////
// sum of an array is using the reduce() method reduces all elements in an array into a single value.
// use reduce() method to find the sum
let sum = grp.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
