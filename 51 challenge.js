// find the frequncy of charactees inside a string. return the result as an array of objects.
// each object has 2 fields: characters and number of occurance

function calculateCharctersFrequncy(str) {
  const frequnecyMap = [];
  console.log(frequnecyMap);

  // count the frequency of each character
  for (const char of str) {
    frequnecyMap[char] = (frequnecyMap[char] || 0) + 1;
  }

  // convert the frequency map to an array of objects
  const resultArray = Object.entries(frequnecyMap).map(([char, count]) => ({
    Character: char,
    occurrences: count,
  }));
  return resultArray;
}

const inputString = "Hello world";
const resultArray = calculateCharctersFrequncy(inputString);
console.log("Characters Frequency:", resultArray);
