// ? Array basic funciton:-
// let arr = [12,456,23,12];
// console.log(arr);
// arr.push(678); //* add the element in end
// console.log(arr);
// arr.unshift(83) //* add the element in start
// console.log(arr);
// arr.pop(); //* remove the element from end
// console.log(arr);
// arr.shift(); //* remove the element from start
// console.log(arr);
// arr.splice(2, 1); //* remove 1 element at index 2
// console.log(arr); //* [12,456,12]
// arr.splice(2, 0, 23); //* at index 2, remove 0 items, insert 23
// console.log(arr); //* [12,456,23,12]
    

// ? Indexing in array
// console.log(arr[2]);
// arr[10] = 689;
// console.log(arr);
// arr[7] = 16;
// console.log(arr);


// ? Taking the value of the array elements from the user
// const prompt = require('prompt-sync')();
// let arrSize = Number(prompt("Enter the size of the array : "))
// let arr = new Array(arrSize)
// for(let i = 1; i<=arrSize; i++){
//     let num = Number(prompt("Enter the "+i+" number : " ));
//     arr[i] = num;
// }
// console.log(arr);


// ? Finding the sum of array elements
// const prompt = require('prompt-sync')();
// let arrSize = Number(prompt("Enter the size of the array : "))
// let arr = new Array(arrSize)
// let sum = 0
// for(let i = 0; i<arr.length; i++){
//     let num = Number(prompt("Enter the "+(i+1)+" number : " ));
//     arr[i] = num;
//     sum = sum+arr[i]
// }
// console.log("Array : ",arr);
// console.log("Sum of the elements : ",sum );


// ? Finding the greatest number in the array 
// let arr = [53,87,2,4,8,4]
// let grt = arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=grt){
//         grt = arr[i];
//     }
// }
// console.log("Array : "+arr);
// console.log("Greatest elment in the array : "+grt );


// ? Question to find the sum and mean
// function calculateSumAndMean(arr, n) {
//     let sum = 0
//     let mean = 0
//     for(let i=0; i<n;i++){
//         sum += arr[i]
//     }
//     mean = sum/n
//     return [sum,mean.toFixed(1)];
// }


// ? Find the second greatest element in the array
let arr = [53,87,2,4,8,4]
function findSecondGreatestElement(arr) {
    
    let grt = arr[0];
    let scndGrt = arr[0];
    
    for(let i=0; i<arr.length; i++){
        
        if(arr.length < 2) return null;
        
        if(arr[i] > grt){
            scndGrt = grt;
            grt = arr[i];
            
        } else if(arr[i] < grt){
            if(arr[i] > scndGrt){
                scndGrt == arr[i]
            } 
        }
    }
    return scndGrt;
}

console.log(findSecondGreatestElement(arr));

