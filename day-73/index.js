const prompt = require("prompt-sync")();

//* Advanced Array Problems Level 2

//? Leetcode : 53.Maximum Sub Array / Kadane's Algo
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     let sum = 0;
//     let maxSum = nums[0];
    
//     for(let i=0; i<nums.length; i++){
//         sum += nums[i];
//         if( sum > maxSum ) maxSum = sum;
//         if( sum < 0 )  sum = 0
//     }

//     return maxSum
// };


//? Leetcode : 169. Majority Element / Boyer Moore's Voting Algo
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
    // let count = 1;
    // let ans = nums[0];
// 
    // for(let i=1; i<nums.length; i++){
        // if(count !== 0){
            // if(nums[i]===ans){
                // count++;
            // } else {
                // count--;
            // }
        // } else {
            // ans = nums[i];
            // count = 1
        // }
    // }
// 
    // return ans
// };


//? Leetcode : 121. Best Time to Buy and Sell Stock
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let min = prices[0];
//     let maxProfit = 0;
//     let currentProfit = 0;

//     for(let i=1; i<prices.length; i++){
//         if(min>prices[i]) min = prices[i];
//         currentProfit = prices[i] - min;
//         maxProfit = Math.max(maxProfit, currentProfit)
//     }
    
//     return maxProfit
// };


//? Leetcode : 283. Move Zeroes
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
    // if(nums.length<=1) return nums;
    // let j=0;
// 
    // for(let i=0; i<nums.length; i++){
        // if(nums[i] !== 0){
            // [nums[i], nums[j]] = [nums[j], nums[i]];
            // j++;
        // }    
    // }
// };

//? Leetcode : 75. Sort Colors
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var sortColors = function(nums) {
    // let k = 0;
    // let j = nums.length-1;
    // let i = 0;
// 
    // while(i <= j){
        // if(nums[i] === 0){
            // [nums[i], nums[k]] = [nums[k], nums[i]];
            // k++;
            // i++;
        // } else if(nums[i] === 2){
            // [nums[i], nums[j]] = [nums[j], nums[i]];
            // j--;
        // } else {
            // i++;
        // }
    // }
// 
// };

