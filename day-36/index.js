// ? finding second max element with video approach
// let arr = [234,45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function scndMax(arr){
//     let max = Math.max(arr[0],arr[1])
//     let max2 = Math.min(arr[0],arr[1])
//     for(let i = 2; i<arr.length; i++){
//         if(arr[i]>max){
//             max2 = max;
//             max = arr[i];
//         } else if(arr[i]>max2 && arr[i]!=max) {
//             max2 = arr[i];
//         }
//     }
//     return max2
// }
// console.log("Converted Array : "+scndMax(arr));


// ? reversing an array with using space
// let arr = [45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function revArr(arr){
//     let newArr = new Array(arr.length);
//     let index = 0
//     for(let i=(arr.length-1); i>=0; i--){
//         newArr[index] = arr[i]
//         index++;
//     }
//     return newArr;
// }
// console.log("Converted Array : "+revArr(arr));


// ? reversing an array without using new space or array
// let arr = [45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function revArr(arr){
//     let j = 0;
//     let k = arr.length-1;
//     for(let i=0; i<arr.length; i++){
//         if(j<k){
//             //* we use this method of swaping , but the destructuring is more modern
//             // let temp = arr[j] 
//             // arr[j] = arr[k];
//             // arr[k] = temp; 
//             [arr[j],arr[k]] = [arr[k],arr[j]]
//         }
//         j++;
//         k--;
//     }
//     return arr;
// }
// console.log("Converted Array : "+revArr(arr));


// ? program to left rotation by one position mean first element goes to end and other shift to left by one
// * not a right way like its an brute force
// let arr = [45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function shiftLeft(arr){
//     let first = arr[0];
//     arr.shift();
//     arr.push(first);
//     return arr;
// }
// console.log("Converted Array : "+shiftLeft(arr));

// * Approach in video
// let arr = [45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function shiftLeft(arr){
//     let firstElement = arr[0]
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = firstElement;
//     return arr;
// }
// console.log("Converted Array : "+shiftLeft(arr));


// ? program to right rotation by one position mean last element goes to start and other shift to right by one
// * in this, iterate the array from END..!
// let arr = [45,23,78,4,2,234]
// console.log("OG Array : "+arr);
// function shiftRight(arr){
//     let lastElement = arr[arr.length-1]
//     for(let i=arr.length-1; i>0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = lastElement;
//     return arr;
// }
// console.log("Converted Array : "+shiftRight(arr));


// ? program to shift all the ZERO's to LEFT and ONE's to RIGHT
let arr = [1,1,0,1,1,0,0,1,0,0]
console.log("OG Array : "+arr);
function zeroOne(arr){
    let i = 0;
    let j = 0;
    for(let l=0; l<arr.length; l++){
        if (arr[l] == 0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j++;
        }
        i++;
    }
    return arr;
}
console.log("Converted Array : "+zeroOne(arr));