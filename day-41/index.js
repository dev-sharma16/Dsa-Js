//? Bubble Sort
// let arr = [1,4,3,2,10,9]
// console.log("Og array : ", arr);

// let n = arr.length
// for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-i-1; j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//         }
//     }
// }
// console.log("Sorted Array : ", arr);

//* i=0             i=1
// j=0              j=0
// [1,4,3,2,10,9]      [1,3,2,4,9,10]  
// j=1              j=1
// [1,3,4,2,10,9]      [1,2,3,4,9,10]
// j=2              j=2
// [1,3,2,4,10,9]      [1,2,3,4,9,10]
// j=3              j=3
// [1,3,2,4,10,9]      [1,2,3,4,9,10]
// j=4              // we get the sorted array
// [1,3,2,4,9,10] 


//? Selection Sort
// let arr = [1,4,3,2,10,9]
// console.log("Og array : ", arr);

// for(let i = 0; i<arr.length-1; i++){
//     let small = i 
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[small]>arr[j]){
//             small = j
//         }
//     }
//     if(i != small){
//         [arr[i],arr[small]] = [arr[small],arr[i]] 
//     }
// }
// console.log("Sorted Array : ", arr);


//? Insertion Sort
let arr = [1,4,3,2,10,9]
console.log("Og array : ", arr);

for(let i=1; i<arr.length; i++){
    let key = arr[i]
    let j = i-1;
    while(j>=0 && arr[j]>key){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = key
}
console.log("Sorted Array : ", arr);
