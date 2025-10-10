const prompt = require("prompt-sync")();

//* Advanced Array Techniques

//? Leetcode : 42. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length <= 2) return 0; 

    let water = 0;
    let leftArr = new Array(height.length);
    let rightArr = new Array(height.length);

    let maxLeft = height[0];
    let maxRight = height[height.length-1];

    leftArr[0] = height[0];
    for(let i=1; i<height.length; i++){
        maxLeft = Math.max(maxLeft, height[i]);
        leftArr[i] = maxLeft;
    }

    rightArr[height.length - 1] = height[height.length - 1];
    for(let i=height.length-2; i>=0; i--){
        maxRight = Math.max(maxRight, height[i]);
        rightArr[i] = maxRight;
    }

    for(let i=0; i<height.length; i++){
        water += (Math.min(leftArr[i], rightArr[i])) - height[i]
    }

    return water
};

//? Leetcode : 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ans = 0;
    let i = 0;
    let j = height.length-1;

    while(i<j){
        ans = Math.max(ans, Math.min(height[i], height[j]) * (j-i))
        if(height[j]>height[i]) i++;
        else j--;
    }

    return ans
};

//? Leetcode : 75. Sort Colors
// done in day 73
