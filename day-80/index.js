//* Sorting Algorithm

//? Quick sort Algo: -
// we have to find a pivot element which could be first or last ( last recommended )
// then start comparing the the current array elements with piviot element
// if the current element is bigger the place it on right side
// if the current element is smaller the place it on left side
// this will give two partion and this process will continue until the array is sorted
// T.C in avg and best case: n*log(n) and is worst case its n^2

//? Code:-

function quickSort(arr, first, last) {
  if (first >= last) return;
  let pIndex = findPivotIndex(arr, first, last);
  quickSort(arr, first, pIndex - 1);
  quickSort(arr, pIndex + 1, last);
  return arr;
}

function findPivotIndex(arr, first, last) {
  let pivot = arr[last];
  let i = first - 1;
  for (let j = first; j < last; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, last);
  return i;
}

function swap(arr, i, j) {
  //[ arr[i], arr[j] ] = [ arr[j], arr[i] ]
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// let arr = [18, 5, 3, 40, 10, 30];
// console.log("Og Array :", arr);
// console.log("Sorted Array :", quickSort(arr, 0, arr.length-1));

//? Leetcode : 268. Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let crctIdx = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[crctIdx]) {
      [nums[i], nums[crctIdx]] = [nums[crctIdx], nums[i]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) return j;
  }

  return nums.length;
};

//? Leetcode : 448. Find All Numbers Disappeared in an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const tempArr = [];
  let i = 0;
  while (i < nums.length) {
    let crctIdx = nums[i] - 1;
    if (nums[i] <= nums.length && nums[i] !== nums[crctIdx]) {
      [nums[i], nums[crctIdx]] = [nums[crctIdx], nums[i]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (j + 1 !== nums[j]) {
      tempArr.push(j + 1);
    }
  }
  return tempArr;
};
