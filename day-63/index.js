const prompt = require("prompt-sync")();

//* Advanced Array Techniques
//* Merge Sort ( for using merge sort both array should be sorted )
// let arr1 = [2, 4, 5];
// let arr2 = [1, 3, 7];
// let ansArr = new Array(arr1.length + arr2.length);
// let i = 0, j = 0, k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     ansArr[k] = arr1[i];
//     i++;
//   } else {
//     ansArr[k] = arr2[j];
//     j++;
//   }
//   k++;
// }
// // when j/arr2 exhausted
// while(i<arr1.length){
//   ansArr[k] = arr1[i];
//   i++;
//   k++
// }
// // when 1/arr1 exhausted
// while(j<arr2.length){
//   ansArr[k] = arr2[j];
//   j++;
//   k++
// }

// console.log("Array 1 :",arr1);
// console.log("Array 2 :",arr2);
// console.log("Answer Array :",ansArr);

//? Leetcode : 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, k = nums1.length-1;
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
    
    while(j>=0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }
};

//? Leetcode : 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1
    let k = 0
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[j] = nums[i+1]
            j++
            k++
        }
    }
    return k;
};

//? Leetcode : 1089. Duplicate Zeros
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0) zeros++;
    }

    let i = arr.length-1;
    let j = (arr.length-1) + zeros;

    while(i!=j){
        if(j<arr.length){
            arr[j] = arr[i]
        }
        j--;
        if(arr[i]==0){
            if(j<arr.length){
                arr[j] = arr[i]
            }
            j--;
        }
        i--;
    }
};