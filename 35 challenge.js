// create a function to convert a CSV text to a "bi-dimensional" array

function cvsToArray(csvText) {
  // split the CSV text into rows
  let row = csvText.split("\n");
  console.log(row);

  // initialize the two-dimensional array
  let resultArray = [];

  // loop through each row
  for (let i = 0; i < row.length; i++) {
    // split each row into columns based on the coma (',') separators
    let columns = row[i].split(",");
    console.log(columns);

    // add the columns to the resultArray
    resultArray.push(columns);
  }
  return resultArray;
}

let csvText =
  "1,John,Doe,954-000-0000\n2,Jane,Smith,905-000-0000\n3,Bob,Johnson,456-054-0000";

let result = cvsToArray(csvText);
console.log(result);
