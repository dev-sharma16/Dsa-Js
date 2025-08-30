//? question to find the frequency of each character in a string
// let str = "hello dev";
// let tempArr = new Array(123).fill(0);
// for(let i=0; i<str.length; i++){
//     let ch = str.charCodeAt(i);
//     tempArr[ch] = tempArr[ch] + 1;
// }
// console.log("String:",str);
// console.log("Character's Frequency :-");
// for(let i=0; i<tempArr.length; i++){
//     if(tempArr[i] > 0) {
//         let letter = String.fromCharCode(i)
//         if(letter === " ") continue;
//         let frequency = tempArr[i]
//         console.log(letter + " : " + frequency);
//     }
// }


//? question to find if the given string is Anagram or not
// let str1 = "aacdde";
// let str2 = "ddecaa";
// if(str1.length !== str2.length){ 
//     console.log("Given Strings are not Anagram");
//     return; 
// } else {
//     let isAnagram = true;
//     let tempArr = new Array(123).fill(0);
//     for(let i=0; i<str1.length; i++){
//         let ch = str1.charCodeAt(i);
//         tempArr[ch] = tempArr[ch] + 1;
//     }
//     // console.log("temp array after First string: ",tempArr);
//     for(let i=0; i<str2.length; i++){
//         let ch = str2.charCodeAt(i);
//         tempArr[ch] = tempArr[ch] - 1;
//     }
//     // console.log("temp array after Secpnd string: ",tempArr);
//     for(let i=0; i<tempArr; i++){
//         if(tempArr[i] !== 0){
//             isAnagram = false;
//             break;
//         }
//     }
//     isAnagram ? console.log("Strings Are Anagram") : console.log('Strings Are Not Anagram');
// }


//* SET :- set is an array like data structure which linear and store elements like array but there is one  Difference the elements in Set Aare Unique and Set has unordered manner of storing elements
// let set = new Set();

//? Some basic function of Set
// set.add(10); // adding elements
// set.add(20);      
// set.add(30);      
// set.add(90);      
// set.add(20); // it excude because its reapting
// console.log(set); 
// set.delete(90); // removing and element
// console.log(set); 
// console.log(set.has(90)); // checking if 90 is exists in this set
// console.log(set.size); //gives the number of unique numbers in the array
// // set.clear(); // use to clear the set
// // console.log(set);

//? Traversing set:-
// for(let a of set){
    // console.log(a - 1);
// }


// ? You can convert an 'Array' in 'SET' bu jsut passing it in set:-
// let arr = [1,1,2,3,4,4,4]
// let set2 = new Set(arr)
// console.log("Array:- ",arr);
// console.log("Set:- ",set2);

//? Leetcode 1832. Check if the Sentence Is Pangram
// var checkIfPangram = function(sentence) {
//     let isPanagram = true;
//     let set = new Set();
//     if (sentence.length < 26) {
//         isPangram = false
//         return isPangram;
//     };
//     for(let i=0; i<sentence.length; i++){
//         let element = sentence[i];
//         set.add(element);
//     }
//     let sizeOfSet = set.size;
//     if(sizeOfSet !== 26){
//         isPanagram = false;
//     }
//     return isPanagram;
// };

//? Leetcode: 771. Jewels and Stones
let jewels = "aA";
let stones = "aAAbbbb";
var numJewelsInStones = function(jewels, stones) {
    let jwlSet = new Set(jewels);
    let count = 0
    for(let stone of stones){
        if (jwlSet.has(stone)) {
            count++;
        }
    }
    return count;
};
console.log(numJewelsInStones(jewels, stones));
