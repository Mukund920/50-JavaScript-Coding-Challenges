// print the multiplication table with numbers from 1 to 10
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// method no 2
for (let i = 1; i <= 10; i++) {
  printTable(i);
  console.log("");
}

function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    var row = n + " * " + i + " = " + n * i;
    console.log(row);
  }
}
