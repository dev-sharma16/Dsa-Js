const prompt = require('prompt-sync')()

// ? queestion to check if the string is 'plaindrome' (using two pinter algo)
// let str = prompt("Enter any string : "); //racecar
// function plaindrome(string){
//     let start = 0;
//     let end = string.length-1;
//     let plaindrome = true
//     while(start < end){
//         if(string[start] !== string[end]){
//             plaindrome = false;
//             break;
//         }
//         start++;
//         end--;
//     }
//     return plaindrome;
// }
// console.log(plaindrome(str));


// ? toggling each alphabet in the string
// ? in-AbCd -----> out-aBcD
// let str =  prompt("Enter String : ");
//* my approach : using js in built function 
// function stringToggle(string){ // my approach
//     let newStr = ""
//     for(let i=0; i<string.length; i++){
//         if(string[i].toUpperCase() === string[i]){
//             newStr += string[i].toLowerCase()
//         } else {
//             newStr += string[i].toUpperCase()
//         }
//     }
//     return newStr;
// }
//* video approach : without usng js in built function rather then using ASCII values
// function stringToggle(string) {
//     let ans = "";
//     for(let i=0; i<string.length; i++) {
//         let asci = string.charCodeAt(i);
//         if(asci>=65 && asci<=90){
//             ans = ans + String.fromCharCode(asci + 32);
//         } else if(asci>=97 && asci<=122) {
//             ans = ans + String.fromCharCode(asci - 32);
//         }
//     }
//     return ans; 
// }
// console.log("Og String: ", str);
// console.log("Toggled String: ", stringToggle(str));


//? Take an array of strings words and a String Prefix. Print the number of strings
//? in words that contain pref as a prefix.
//? Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
//? Output: 2
// let strArr = JSON.parse(prompt("Enter the array of Strings (like [\"xyz\",\"abcd\"]): "));
// let prefix = prompt("Enter Prefix: ")
// function checkPre(strArr, prefix){
//     let count = 0
//     for(let i=0; i<strArr.length; i++){
//         if(strArr[i].startsWith(prefix)) count++;
//     }
//     return count;
// }
// console.log("String Array: ",strArr);
// console.log("Number of Words in which prefix is presented: ",checkPre(strArr, prefix));


//? Capitalize first & last character of each word
//? in the sentence and print the new sentence
//? Ex - Hello bhai Kaise ho a
//? Hello Bhai KaisE HO A
let str = "hello bhai"
console.log("Og String: ",str);
let ans = "";
let strArr = str.split(" ");
for(let i=0; i<strArr.length; i++){
    let word = strArr[i];
    if(word.length<=2) {
        ans += word.toUpperCase() + " ";
    } else {
        ans =   ans + word.charAt(0).toUpperCase() 
                    + word.substring(1, word.length-1) 
                    + word.charAt(word.length-1).toUpperCase()
                    + " ";
    }
}
console.log("Transformed String: ",ans);
