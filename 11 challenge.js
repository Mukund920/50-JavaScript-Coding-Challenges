//calculate the average of the numbers in an array of numbers
const ary = [1, 3, 9, 15, 90];

// using for loop
let avg = 0;
let sum = 0;
for (let i = 0; i < ary.length; i++) {
  sum = sum + ary[i];
  avg = sum / ary.length;
}
console.log(sum);
console.log(avg);

// using for loop with function
const mean = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};

console.log(mean([1, 5, 4, 89, 66, 8, 41, 23]));

// use the forEach() method
const arry = [10, 20, 30, 40];
let sm = 0;
let ag = 0;
arry.forEach((number) => {
  sm = sm + number;
});
ag = sm / arry.length;
console.log(ag);

// use reduce() method
const mean1 = (data) => {
  return +(
    data.reduce((accumalator, currentvalue) => accumalator + currentvalue, 0) /
    data.length
  ).toFixed(2);
};

const aray = [5, 6, 5, 47, 65, 48, 9, 4, 5, 69, 7];
console.log(mean1(aray));
