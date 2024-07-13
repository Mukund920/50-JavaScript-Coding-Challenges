const arry = [8, -9, 0, 56, 41, 22, 8, 65, -9, 125, -889, 54, 89, -55, 112];

// find the maximum number in an array of numbers
const max = function (data) {
  let j = data[0];

  for (let i = 0; i < data.length; i++) {
    if (data[i] > j) {
      j = data[i];
    }
  }

  console.log(j);
};

const ary1 = max(arry);

// use Math.max method to find maximun number
const Max = (data) => {
  console.log(Math.max(...data)); // math.max with spread
};
const ary3 = Max(arry);

// use math.max with reduce to find maximum number
const MAX = (data) => {
  return data.reduce((a, b) => Math.max(a, b));
};

const ary4 = MAX(arry);
console.log(ary4);

// find the minimum number in an array of numbers
const min = (data) => {
  let j = data[0];

  for (let i = 0; i < data.length; i++) {
    if (data[i] < j) {
      j = data[i];
    }
  }

  console.log(j);
};

const ary2 = min(arry);

// use Math.min method to find manimum number
const Min = (data) => {
  console.log(Math.min(...data)); // math.max with spread
};
const ary5 = Min(arry);

// use math.max with reduce to find maximum number
const MIN = (data) => {
  return data.reduce((a, b) => Math.min(a, b));
};

const ary6 = MIN(arry);
console.log(ary6);
