//? Leetcode : 832. Flipping an Image
// var flipAndInvertImage = function(image) {
//     for(let i=0; i<image.length; i++){
//         let l = 0;
//         let k = image[i].length-1;
//         while(l<=k) {
//             if(l === k) {
//                 image[i][l] ^= 1;
//             } else {
//                 let temp = image[i][l] ^= 1;
//                 image[i][l] = image[i][k] ^ 1;
//                 image[i][k] = temp
//             }
//             l++;
//             k--;
//         }
//     }
//     return image;
// };
// let image = [[1,1,0],[1,0,1],[0,0,0]]
// console.log("OG Matrix = ",image);
// console.log("Flipped Matrix = ",flipAndInvertImage(image));


//* STRINGS ------------------------------------------------
// string are immutable in nature mean you can't change them like array
// string is array of character -- WRONG!
// string are sequence of character
// string shaows behaviour like array

// let arr = [10, 20, 30, 40, 50];
// console.log(arr[3]);   // 40
// arr[0] = 100           // now in array index 0 = 100
// let str = "devSharma" 
// console.log(str[3]);   // S
// str[0] = "D"           // this will not work bcz string are immutable


//? Some Strings funtions
// let str = 'DevSharma';
// console.log(str.substring(3)); // extract a part from String = Sharma
// console.log(str.substring(0,3)); // extract a part from String = dev
// // splice is also like the 'Substring' but in 'splice' we can pass the 'negative' value also
// console.log(str.concat("Is", "Handsome")); // 'concat' can add a new string in previous string
// // 'trim' is funciton to remove blank spaces from start and end

//? printing each element from the stirng
// let str = "devSharma"
// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }

//? reversing and string
let str = 'devSharma'
let rev = ""
for(let i=str.length-1; i>=0; i--){
    rev = rev + str.charAt(i)
}
console.log("Revesed String :",rev);



