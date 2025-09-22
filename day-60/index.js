//* recursion and backtracking
const prompt = require("prompt-sync")();

//? question to do sum of number till nth number using resursion and backtracking
// let n = Number(prompt("Enter the n'th number for Sum : "));
// function summ(n){
//   if(n === 1) return 1;
//   return n + summ(n-1)
// }
// console.log(summ(n));

//? question for finding the factrorial on the n'th number
// let n = Number(prompt("Enter the n'th number for Factorial : "));
// function fact(n){
  // if(n === 1) return 1;
  // return n * fact(n-1)
// }
// console.log(fact(n));

//? question to find/print fibonacci series till n'th number using recursion and backtracking
// let n = Number(prompt("Enter the n'th number for Fibonacci Series : "));
// let first = 0, second = 1;
// process.stdout.write(first+" "+second+" ");
// function fibo(n, first, second){
//   if(n==0) return;
//   let third = first+second;
//   process.stdout.write(third+" ")
//   fibo(n-1, second, third)
// }
// fibo(n-2, first, second)

//? question to find/print fibonacci series sum till n'th number using recursion and backtracking
let n = Number(prompt("Enter the n'th number for Fibonacci Series sum till there: "));
function fibb(n){
  if(n==0) return 0;
  if(n==1) return 1;
  return fibb(n-1) + fibb(n-2);
}
console.log(fibb(n));
