//* Advanced problem on Hashing day 2

//? Leetcode : 128. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if(nums.length<=0) return 0;

    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
};

//? Gfg : Count distinct elements in every window
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
    countDistinct(arr, k) {
        let map = new Map();
        let ansArr = [];
    
        for(let i=0; i<k; i++){
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }   
    
        let i = 0;
        let j = k;
    
        ansArr.push(map.size);
    
        while(j<arr.length){
            if(map.has(arr[j])){
                map.set(arr[j], map.get(arr[j]) + 1);
            } else {
                map.set(arr[j], 1);
            }
            j++;
        
            const freq = map.get(arr[i])
            if(freq == 1){
                map.delete(arr[i]);
            } else {
                map.set(arr[i], freq - 1);
            }
            i++;
        
            ansArr.push(map.size);
        }
    
        return ansArr;
    }
}