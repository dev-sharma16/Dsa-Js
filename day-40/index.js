//? question to shift the element in left by k(given by user)th number
const prompt = require('prompt-sync')();
let k = Number(prompt('Enter the times u want shift the element : '));
const arr = [1,2,3,4,5]

//* this the brute force method
// let count = 0
// k = k % arr.length //? using this condition we can save resoures from unneccesary shifts
// function shiftElementByK(arr, k){
//     for(let j=1; j<=k; j++){
//         count++
//         let firstElement = arr[0]
//         for(let i=0; i<arr.length-1; i++){
//             arr[i] = arr[i+1]
//         }
//         arr[arr.length-1] = firstElement
//     }
//     return arr
// }
// console.log(count);
// console.log("OG Array: ",arr); 
// console.log("Transformed Array: ",shiftElementByK(arr,k));

//* efficient solution
// function shiftElementByK(arr, k){
//     let tempArr = new Array(arr.length) 
//     for(let i = 0; i<arr.length; i++){
//         tempArr[i] = arr[(i+k)%arr.length];
//     }
//     return tempArr;
// }
// console.log("OG Array: ",arr); 
// console.log("Transformed Array: ",shiftElementByK(arr,k));

//* most optimized solution without using additional space
//? this algo is called block swap reverse algorithm
// k = k % arr.length
// function reverse(arr, i,j){
//     while(i<j){
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++,
//         j--
//     }
// }
// console.log("OG Array: ",arr); 

// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1);
// // for right reversal
// // i=0, j=length-1
// // i=0, j=k-1
// // i=k, j=length-1

// console.log("Transformed Array: ",arr);


//? question to shift 0's to right with extra space
// const arr = [1,0,1,0,1,0,1,1]
// function moveZerosToEnd(arr) {
//     let i = 0;
//     let j = 0;
//     for( let k = 0; k<arr.length; k++){
//         if(arr[k]===1){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             j++
//         }
//         i++
//     }
//     return arr
// }
// console.log("OG Array: ",arr);
// console.log("Transformed Array: ",moveZerosToEnd(arr));


