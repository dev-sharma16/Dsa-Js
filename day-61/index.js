const prompt = require("prompt-sync")();

// ? sum of digits using recursion ( 891 => 18 )
// const n = Number(prompt("Enter digit for sum : "));
// function digSum(n){
//   if(n < 10) return n;
//   const dig = n%10
//   return dig + digSum(Math.floor(n/10))
// }
// console.log("Sum of digit : ",digSum(n));

//? reverse the number using recursion ( 891-> 198 )
// const n = Number(prompt("Enter digit for reverse : "));
//* my approach
// function revNum(n){
//   if(n < 10) return n;
//   const lastNum = n%10;
//   return lastNum + revNum(String(Math.floor(n/10)))
// }

//* approach in video
// function revNum(n, rev){
// if(n===0) return rev
// return revNum(Math.floor(n/10), rev*10 + (n%10))
// }
// console.log("Reversed number:",revNum(n, 0))

//? GCD/HCF : Greatest or Hoghest common factor
// 20 -> 1, 2, 4, 5, 10, 20
// 32 -> 1, 2, 4, 8, 16, 32
//* the gcd of 20 and 32 will be 4

//* we use minimum from both number because all factors or bigger number are in smallest ones is not possible but all larger number factor asre present in smallest one
//ex:-
// 16 -> 1, 2, 4, 6, 8, 16
// 24 -> 1, 2, 4, 6, 8, 12, 24
// Time complexity -> O(min(a, b))

//? program to find GCD/HCF
// const a = 32, b = 20;
// for (let i = Math.min(a, b); i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     console.log("HCF or GCD from " + a + " and " + b + " is -> " + i);
//     break;
//   }
// }

//* Euclidean Algorithm : an efficient way to find GCD/HCF
// Time complexity -> O(max(a, b))
// let a = 16, b = 24
// while(a != b){
//   if(a>b) a = a-b
//   else b = b - a
// }
// console.log("GCD -> " + a);

//* Recursive Version of Euclidean Algo:-
let a = 16, b = 24
function gcd(a, b){
  if(a === b) return a;
  if(a>b){
    return gcd(a-b, b)
  } else{
    return gcd(a, b-a)
  }
}
console.log("GCD -> "+gcd(a, b));

//* more optimized approach 
// let a = 16, b = 24
// function gcd(a, b){
//   if(b===0) return a;
//   return gcd(b, a%b);
// }
// console.log("GCD -> "+gcd(a, b));

//? Leetcode : 1979.Find Greatest Common Divisor of Array
// var findGCD = function(nums) {
    // let grt = 0;
    // let sm = 0;
    // for(let i=0; i<nums.length; i++){  // finding greatest
        // if(nums[i]>nums[grt]){
            // grt = i;
        // }
    // }
    // for(let i=0; i<nums.length; i++){  // finding smallest
        // if(nums[i]<nums[sm]){
            // sm = i;
        // }
    // }
    // using euclidean algo in recursive manner to find gcd
    // function gcd(a, b){
      // if(a === b) return a;
      // if(a>b){
        // return gcd(a-b, b)
      // } else{
        // return gcd(a, b-a)
      // }
    // }
    // let result = gcd(nums[grt], nums[sm]);
    // return result;
// };


