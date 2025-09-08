//* Leetcode : 202. Happy number
// let n =10
// var isHappy = function (n) {
//     let set = new Set();
//     while(true){
//         let sum = 0;
//         while(n>0){
//             let rem = n%10;  
//             sum += (rem*rem);  
//             n = Math.floor(n/10); 
//         }
//         if(sum === 1) return true;
//         if(set.has(sum)) return false;
//         else set.add(sum);
//         n = sum;
//     }
//     return true;
// };
// console.log(isHappy(n));

//* Leetcode : 1. Two Sum 
// let nums = [2,7,11,15];
// let target = 9;
// var twoSum = function(nums, target) {
//     let map = new Map();
//     let arr = [];
//     for(let i=0; i<nums.length; i++){
//         if(map.has(target-nums[i])){
//             let first = map.get(target-nums[i]);
//             let second = i;
//             arr.push(first);
//             arr.push(second);
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     return arr;
// };
// console.log(twoSum(nums, target));

//* Leetcode : 2351. First Letter Appear Twice
// let s = "abccbaacz";
// var repeatedCharacter = function(s) {
//     let set = new Set();
//     for(let i=0; i<s.length; i++){
//         if(s[i] === s[i+1]){
//             return s[i];
//         }
//         if(set.has(s[i])) return s[i];
//         set.add(s[i]);
//     }
// };
// log(repeatedCharacter(s));

//* Leetcode : 2418. Sort the People
let names = ["Mary","John","Emma"];
let heights = [180,165,170];
var sortPeople = function(names, heights) {
    let map = new Map();
    for(let i=0; i<names.length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let ans = new Array(names.length);
    for(let i=0; i<heights.length; i++){
        ans[i] = map.get(heights[i])
    }
    return ans;
};
console.log(sortPeople(names, heights));

