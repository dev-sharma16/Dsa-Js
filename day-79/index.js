//* Advanced Array Techniques

//? Leetcode : 15. 3Sum
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};

//* Merge Sort : previously we sawed how to merge two sorted array together(day 63) and this is how we can sort and arry with merge sort
// First we divide the given array and sort both parts, And then we merge those two sorted parts 'conquer'.
// Time Complexity is 'O*logN'

function conquer (arr, f, m, l){
  let i =f;
  let j = m+1;;
  let k = 0; 
  let tempArr = new Array(l-f+1).fill(0)
  while(i<=m && j<=l){
    if(arr[i]<arr[j]) tempArr[k++] = arr[i++];
    else tempArr[k++] = arr[j++];
  }

  while(i<=m){
    tempArr[k++] = arr[i++];
  }
  while(j<=l){
    tempArr[k++] = arr[j++];
  }

  i=f; k=0;
  while(k<tempArr.length){
    arr[i++] = tempArr[k++]
  }
}

function divide (arr, f, l){
  if(f>=l) return;
  const mid = Math.floor((f+l)/2);

  divide(arr, f, mid);
  divide(arr, mid+1, l);
  conquer(arr, f, mid, l)
}

let arr = [10, 7, 8, 2, 19, 69, 45, 8]
console.log(`Array before Merge Sort: ${arr}`);
divide(arr, 0, arr.length-1);
console.log(`Array before Merge Sort: ${arr}`);
