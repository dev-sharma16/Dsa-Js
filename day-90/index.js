//* Advanced problem on Hashing

//? Leetcode : 349. Intersection of Two Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let ansArr = [];

    for(let j=0; j<nums2.length; j++){
        if(set.has(nums2[j]) && !ansArr.includes(nums2[j])){
            ansArr.push(nums2[j])
        }
    }

    return ansArr;
};

//? Leetcode : 350. Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let ansArr = [];
    for(let i=0; i<nums1.length; i++){
        const index = nums2.indexOf(nums1[i]);
        if (index !== -1) {
            ansArr.push(nums1[i]);
            nums2.splice(index, 1); 
        }
    }
    return ansArr;
};

//? Leetcode : 560. Subarray Sum Equals K ( algo used named 'Prefix Sum' )
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;

    map.set(sum, 1);
    for(let i=0; i<=nums.length; i++){
        sum += nums[i];

        if(map.has(sum-k)){
            count += map.get(sum-k)
        }

        if(map.has(sum)){
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1)
        }
    }

    return count;
};

//? Gfg : Longest Subarray with Sum K
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        let map = new Map();
        let sum = 0;
        let longest = 0;
        
        map.set(sum, -1);
        for(let i=0; i<=arr.length; i++){
            sum += arr[i];
            
            if(map.has(sum-k)){
                // map.set(sum-k, i - map.get(sum-k) + 1);
                // if(i - map.get(sum-k) + 1 > longest) longest = i - map.get(sum-k) + 1;
                longest = Math.max(longest, i - map.get(sum-k))
            }
            
            if(!map.has(sum)){
                // map.set(sum, (i - map.get(sum-k) + 1));
                map.set(sum, i);
            }
        }
        
        return longest;
    }
}

//? Leetcode : 525. Contiguous Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;

    map.set(sum, -1);
    for(let i=0; i<nums.length; i++){
        sum += (nums[i] === 0 ? -1 : 1);

        if(map.has(sum)){
            maxLen = Math.max(maxLen, i - map.get(sum)); 
        } else {
            map.set(sum , i);
        }
    }

    return maxLen;
};
