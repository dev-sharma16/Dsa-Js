//? Leetcode : 41. First Missing Positive(h)
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i=0;
    while( i<nums.length ) {
        let crctIdx = nums[i]-1
        if(nums[i]>0 && nums[i]<nums.length && nums[i]!==nums[crctIdx]){
            [ nums[i], nums[crctIdx] ] = [ nums[crctIdx], nums[i] ] 
        } else {
            i++
        }
    }

    for(let j=0; j<nums.length; j++) {
        if(j+1 !== nums[j]) return j+1;
    }

    return nums.length+1;
};

//? Leetcode : 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let f = 0; 
    let l = nums.length-1;

    while(f<=l){
        let m = Math.floor((f+l)/2);

        if(nums[m] == target){
            return m;
        } else if(target > nums[m]){
            f = m + 1;
        } else {
            l = m - 1;
        };
    }

    return f;
};

//? Leetcode : 34. Find First and Last Position of Element in Sorted Array(m) 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findFirst = () => {
        let low = 0, high = nums.length - 1, first = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                first = mid;
                high = mid - 1; 
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return first;
    };

    const findLast = () => {
        let low = 0, high = nums.length - 1, last = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                last = mid;
                low = mid + 1;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return last;
    };

    return [findFirst(), findLast()];
};

