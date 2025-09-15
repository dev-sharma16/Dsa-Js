//* Recusrion and Stack memory
const prompt = require("prompt-sync")();

//? print hello world using Recusion
// let n = Number(prompt("Enter the n'th time you want to print 'Hello World' : "));
// print(n)
// function print(n){
//   if(n === 0) return;
//   console.log("hello world");
//   print(--n);
// }

//? print natural number from n to 1 :
// let n = Number(prompt("Enter the n'th number : "));
// function print(n){
//   if(n === 0 ) return;
//   process.stdout.write(`${n} `);
//   print(--n);
// }
// print(n);

//*using bactracking
//? print natural number from 1 to n :
let n = Number(prompt("Enter the n'th number : "));
function print(n){
  if(n === 0 ) return;
  print(n-1);
  process.stdout.write(`${n} `);
}
print(n);