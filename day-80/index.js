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
  if(first >= last) return;
  let pIndex = findPivotIndex(arr, first, last);
  quickSort(arr, first, pIndex-1);
  quickSort(arr, pIndex+1, last  );
  return arr;
}

function findPivotIndex(arr, first, last) {
  let pivot = arr[last];
  let i = first - 1;
  for(let j=first; j<last; j++){
    if(arr[j] < pivot){
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