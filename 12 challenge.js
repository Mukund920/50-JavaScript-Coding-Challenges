// create a function thta receive an array of numbers and returns an array containing only the positive numbers
const ary = [-1, 5, -9, 7, 8, 6, -98, 85, 6, -4];

// use reduce() method
const positive = (data) => {
  let number = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= 0) {
      number.push(data[i]);
    }
  }
  return number;
};

let ary1 = positive(ary);
console.log(ary1);

// use a for() loop
const func1 = (data) => {
  let arry = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] >= 0) {
      arry.push(data[i]);
    }
  }
  return arry;
};

let ary2 = func1(ary);
console.log(ary2);

// use a 'for...of' loop
const func2 = (data) => {
  let arry = [];
  for (let i of data) {
    if (i > 0) {
      arry.push(i);
    }
  }
  return arry;
};

let ary3 = func2(ary);
console.log(ary3);

// use .filter() array method
// create filter function
const func3 = (data) => {
  return data.filter((i) => i >= 0);
};

let ary4 = func3(ary);
console.log(ary4);
