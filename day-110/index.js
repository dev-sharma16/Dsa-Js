//* Queue and Stack

//? Gfg : Next Greater Element
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  nextLargerElement(arr) {
    let st = [];
    let ansArr = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
      while (st.length != 0 && st[st.length - 1] <= arr[i]) {
        st.pop();
      }

      if (st.length == 0) ansArr[i] = -1;
      else ansArr[i] = st[st.length - 1];

      st.push(arr[i]);
    }
    return ansArr;
  }
}

//? Gfg : Stock span problem
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  calculateSpan(arr) {
    let ans = [];
    let st = [];

    for (let i = 0; i < arr.length; i++) {
      while (st.length > 0 && arr[st[st.length - 1]] <= arr[i]) {
        st.pop();
      }

      if (st.length == 0) {
        ans[i] = i + 1;
      } else {
        ans[i] = i - st[st.length - 1];
      }
      st.push(i);
    }
    return ans;
  }
}

//? Leetcode : 84. Largest Rectangle in Histogram (H)
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let left = [],
    right = [];
  let ans = 0;
  let st1 = [],
    st2 = [];
  // left side and st1
  for (let i = 0; i < heights.length; i++) {
    while (st1.length > 0 && heights[st1[st1.length - 1]] >= heights[i]) {
      st1.pop();
    }
    if (st1.length == 0) {
      left[i] = -1;
    } else {
      left[i] = st1[st1.length - 1];
    }
    st1.push(i);
  }
  // right side and st2
  for (let i = heights.length - 1; i >= 0; i--) {
    while (st2.length > 0 && heights[st2[st2.length - 1]] >= heights[i]) {
      st2.pop();
    }
    if (st2.length == 0) {
      right[i] = heights.length;
    } else {
      right[i] = st2[st2.length - 1];
    }
    st2.push(i);
  }
  // iteration for final answer
  for (let i = 0; i < heights.length; i++) {
    const width = right[i] - left[i] - 1;
    const area = heights[i] * width;
    ans = Math.max(ans, area);
  }
  return ans;
};

//* task
//? Gfg : Next Smaller Element
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
  nextSmallerEle(arr) {
    let st = [];
    let ansArr = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
      while (st.length != 0 && st[st.length - 1] >= arr[i]) {
        st.pop();
      }

      if (st.length == 0) ansArr[i] = -1;
      else ansArr[i] = st[st.length - 1];

      st.push(arr[i]);
    }
    return ansArr;
  }
}

//? Leetcode : 496. Next Greater Element I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    let st = [];
    let map = new Map();

    for(let i = nums2.length - 1; i >= 0; i--){
        let num = nums2[i];
        while(st.length != 0 && st[st.length - 1] <= num){
            st.pop();
        }
        if(st.length == 0){
            map.set(num, -1)
        } else {
            map.set(num, st[st.length - 1]);
        }
        st.push(nums2[i]);
    }

    ans = nums1.map(num => map.get(num));
    return ans;
};

//? Leetcode : 739. Daily Temperatures (Mid)
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let st = [];
    let ans = [];

    for(let i=temperatures.length - 1; i>=0; i--){
        while(
            st.length != 0 && temperatures[st[st.length -1]] <= temperatures[i]
        ){
            st.pop();
        }
        if(st.length == 0){
            ans[i] = 0;
        } else {
            ans[i] = st[st.length -1] - i;
        }
        st.push(i);
    }

    return ans;
};

//? Leetcode : 85. Maximal Rectangle (Hard)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 1) {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }

        let area = calArea(heights);

        maxArea = Math.max(area, maxArea);
    }

    return maxArea;
};

var calArea = function (heights) {
    let left = [], right = [];
    let ans = 0;
    let st1 = [], st2 = [];
    // left side and st1
    for (let i = 0; i < heights.length; i++) {
        while (st1.length > 0 && heights[st1[st1.length - 1]] >= heights[i]) {
            st1.pop();
        }
        if (st1.length == 0) {
            left[i] = -1;
        } else {
            left[i] = st1[st1.length - 1];
        }
        st1.push(i);
    }
    // right side and st2
    for (let i = heights.length - 1; i >= 0; i--) {
        while (st2.length > 0 && heights[st2[st2.length - 1]] >= heights[i]) {
            st2.pop();
        }
        if (st2.length == 0) {
            right[i] = heights.length;;
        } else {
            right[i] = st2[st2.length - 1];
        }
        st2.push(i);
    }
    // iteration for final answer
    for (let i = 0; i < heights.length; i++) {
        const width = right[i] - left[i] - 1;
        const area = heights[i] * width;
        ans = Math.max(ans, area);
    }
    return ans;
};

// like '84. Largest Rectangle in Histogram' question 
// create an height array with length = cols and fills with 0;
// start traversing row by row
// when found 1 then add that to hights array like mantain frequency
// if 0 then make it compelte 0 at that index.
// then you have an array of height after one row traverse like 84.histogram
// then apply same logic and find the max area after one row and update it
// until each row traversed repeat this process
// traverse row >> update frequency >> find the max area >> update it
// at last return final max area.


//* extra quesiton for practce 
//? Gfg : Previous Greater Element, Smaller on Left, 

