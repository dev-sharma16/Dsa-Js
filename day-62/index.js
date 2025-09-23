const prompt = require("prompt-sync")();

//* Sieve of Eratosthenes
// An algo to find prime number in the range from 1 to the particular number.

//? Program to find prime in the range of the given number using 'Sieve of Eratosthenes'
// let n = Number(prompt("Enter the number : "));
// checkPrimeInRange(n);
// function checkPrimeInRange(n) {
//   let isPrime = new Array(n + 1).fill(true);
//   for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (isPrime[i] == true) {
//       for (let j = i * i; j <= n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   for (let i = 2; i < isPrime.length; i++) {
//     if (isPrime[i]) process.stdout.write(i + " ");
//   }
// }

//? Leetcode : 69. Sqrt(x)
//* approach in video
// var mySqrt = function(x) {
// let i=0;
// for(i; i*i <= x; i++){
// if(i*i == x) return i;
// }
// return i-1;
// };

//* my approach
// var mySqrt = function(x) {
// return Math.floor(Math.sqrt(x))
// };

//? Leetcode : 50. Pow(x, n)
//* appraoch in video
// var myPow = function(x, n) {
//     if(n==0) return 1.0;
//     return n<0 ? 1/temp(x,n) : temp(x, n)
// };

// var temp = function(x, n){
//     if(n==0) return 1;
//     let ans = temp(x, parseInt(n/2))
//     if(n%2==0)  return ans*ans;
//     return ans*ans*x
// }

//* extra question from module 26
//? Find the factors
// function findFactors(n) {
  // for (let i = 1; i <= Math.floor(n / 2); i++) {
    // if (n % i == 0) process.stdout.write(`${i} `);
  // }
  // process.stdout.write(`${i}`);
// }
