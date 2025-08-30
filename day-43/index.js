//* Multi-Dimensional arrays
// let arr = [ [1,2,3], [4,5,6], [7,8,9] ]; //? 2d Array
// let arr  = [ [ [1,2],[3,4] ], [ [5,6],[7,8] ], [ [9,10],[11,12] ] ] //? 3d Array
// console.log(arr);

//? travesing each element
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         process.stdout.write(`${arr[i][j]} `);
//     }
// }

//? Dynamically adding elements in the array
// const prompt = require('prompt-sync')();
// let rows = Number(prompt('Enter the number of rows: '))
// let columns = Number(prompt('Enter the number of columns: '))
// let arr = [];
// for(let i=0; i<rows; i++){
//     arr[i] = [];
//     for(let j=0; j<columns; j++){
//         let number = Number(prompt(`Enter the number for ${i+1} row's ${j+1}'th column element: `))
//         arr[i][j] = number;
//     }
// }
// console.log("Created Array: ",arr);


//? question to sum the diogonal element of the 2d array
// let arr = [ [1,2,3], [4,5,6], [7,8,9] ]; 
// let leftSum = 0;
// let rightSum = 0;
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         if( j===i ){
//             leftSum += arr[i][j]
//         }
//         if( i+j === arr.length-1 ){
//             rightSum += arr[i][j];
//         }
//     }
// }
// console.log("Array: ",arr);
// console.log("Left Diogonal Sum: ",leftSum);
// console.log("Right Diogonal Sum: ",rightSum);


//? Jacked array
// let arr = [ [1,2,3,4], [5,6], [7,8,9,10,11] ];

// let prompt = require('prompt-sync')();
// let arr = new Array(4);
// for(let i=0; i<arr.length; i++){
//     let size = Number(prompt('Inner size Array: '))
//     arr[i] = new Array(size);
// }
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         arr[i][j] = Number(prompt("Enter array Element: "))
//     }
// }
// console.log(arr);

