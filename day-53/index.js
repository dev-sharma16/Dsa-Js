//? Leetcode : 202. Happy Number
// var isHappy = function (n) {
//     let set = new Set();
//     while(true){
//         let sum = 0;
//         while(n>0){
//             let rem = n%10;  
//             sum += (rem*rem);  
//             n = Math.floor(n/10); 
//         }
//         if(sum === 1) return true;
//         if(set.has(sum)) return false;
//         else set.add(sum);
//         n = sum;
//     }
//     return true;
// };
// console.log(isHappy(19));  // n=19(true), n=2(false)


// * MAP : map is data structure which holds the object/Key value pair , { key => value, key2 => value2 } amd 'Key' will always be 'unique' na dvalue can either be unique or repeating
// let map = new Map();

//? Some basic function of MAP :-
// map.set("dev", 7);  // it will add the 'key' "dev" with 'value' "7" 
// map.set("age", 22);
// map.set("isFail", false);
// console.log(map);
// map.set("isFail", true); // if you use same key then it will update the previous value
// console.log(map);
// // map.delete("isFail"); // it will delete the key "isFail" from map 
// console.log(map.has("dev")); // it will check if there is any key "dev" in map
// console.log(map.size); // it will find the size of the map
// console.log(map.get("age")); // it find the value of the 'key' "age"
// console.log(map.keys()); // it will print all the keys
// console.log(map.values()); // it find all the values

//? traversing each key, entries
// for(let a of map.keys()){
//     console.log(a);
// }

// for(let a of map.entries()){
//     console.log(a);
// }

// for(let [key, value] of map){
//     console.log(key+" -> "+value);
// }

// ? find the frequency of each element using MAP
let arr = [1,10,2,4,2,2,2,6,1,1,10];
let map = new Map(); 
// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     let target = arr[i];
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] === target){
//             count++;
//         }
//     }
//     if(map.has(target)){
//         map.set(target, count)
//     } else {
//         map.set(target, count);
//     }
// }
// // console.log("Array : ",arr);
// console.log('Frequencies of elements :-');
// for(let [key, value] of map){
//     console.log(key+" -> "+value);
// }
//* approach in video:- 
for(let i=0; i<arr.length; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1)
    } else {
        map.set(arr[i], 1);
    }
}
console.log(map);




