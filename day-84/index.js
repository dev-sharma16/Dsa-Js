//* Sorting Algorithm

//* Cyclic Sort
// It can only applied when it used on range of an elements like array's first and last element should be an number range from 1 to 5.
// In this algo we find the index on an elemnt ,
// Like this is the array : [3,2,5,1,4],
// Sorted array : [1,2,3,4,5],
// In Sorted array as you can see at Index 0 = 1, at 1 = 2,
// So for sorting the array we traverse through the array and find the actual index for the current array element.
// T.C : o(n), S.C : o(1).

let arr = [3,2,5,1,4];
console.log("Og Array :", arr);
function cyclicSort(arr) {
  let i = 0;
  while(i<arr.length){
    const correctIndex = arr[i] - 1;

    if(arr[i] !== arr[correctIndex]){
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }
}
cyclicSort(arr);
console.log("Sorted Array :", arr);