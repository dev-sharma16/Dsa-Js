//* Biotonic and Monotonic Array
//? Monotonic : the array which either sorted in ascending or descnding order.
//? Biotonic : the array which is combination of the ascending and descinding order.

//? Leetcode : 852. Peak Index in a Mountain Array

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let f = 0;
    let l = arr.length - 1;
    
    while(f<l){
        const mid = Math.floor((f+l)/2);
        if(arr[mid] <= arr[mid+1]){
            f = mid + 1
        } else {
            l  = mid;
        }
    }

    return f;
};

//? Leetcode : 33. Search in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let f = 0;
    let l = nums.length-1;

    while(f<=l){
        const mid = Math.floor((f+l)/2);
        if(nums[mid] == target){
            return mid;
        } else if(nums[f] <= nums[mid]){
            if(nums[f] <= target && target <= nums[mid]){
                l = mid;
            } else {
                f = mid + 1;
            }
        } else {
            if (nums[mid+1] <= target && target <= nums[l]){
                f = mid + 1;
            } else {
                l = mid;
            }
        }
    }

    return -1;
};


//* More problems on binary search problems.

//? GFG : Allocate Minimum Pages

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

var isValid = function(arr, upperLimit, k){
    let count = 1;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] + sum > upperLimit) {
            count++;
            sum = arr[i];
            if(count>k) return false;
        } else {
            sum += arr[i];
        }
    }
    return true;
}

class Solution {
    findPages(arr, k) {
        if(k>arr.length) return -1;
        let first = 0;
        let last = 0;
        let ans = -1;
        
        for(let i=0; i<arr.length; i++){
            last += arr[i];
            first = Math.max(arr[i], first)
        }
        
        while(first<=last){
            let mid = Math.floor((first+last)/2)
            if(isValid(arr, mid, k)){
                ans = mid;
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        
        return ans;
    }
}

//? Leetcode : 1011. Capacity To Ship Packages Within D Days

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    if(days > weights.length) return -1;
    let first = 0;
    let last = 0;
    let ans = -1;
    for(let i=0; i<weights.length; i++){
        first = Math.max(weights[i], first);
        last += weights[i];
    }
    
    while(first <= last){
        const mid = Math.floor((first+last)/2);
        if(isValid(weights, mid, days)){
            ans = mid;
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }

    return ans;
};

var isValid = function(weights, upperLimit, days){
    let count = 1;
    let sum = 0;
    for(let i=0; i<weights.length; i++){
        if(weights[i] + sum > upperLimit){
            count++;
            sum = weights[i];
            if(count > days) return false;
        } else {
            sum += weights[i]
        }
    }

    return true;
}

//? Leetcode : 875. Koko Eating Bananas

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let ans = -1;
    let lowest = 1;
    let highest = Math.max(...piles);

    while(lowest <= highest){
        const mid = Math.floor((lowest+highest)/2);

        if(isValid(piles, mid, h)){
            ans = mid;
            highest = mid - 1;
        } else {
            lowest = mid + 1;
        }
    }

    return ans;
};

var isValid = function(piles, mid, h){
    let totalHrs = 0;

    for (let i = 0; i < piles.length; i++) {
        totalHrs += Math.ceil(piles[i] / mid); 
    }

    return totalHrs <= h; 
}
