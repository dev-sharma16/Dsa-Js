// ? NOTE: 
// ? 1.use FOR LOOP when you know the number of       iteration,
// ? 2. use WHILE LOOP when you know it have to run until this condition is true

// let newN  = n%10; //? it gives the last value from the number
// let neWN = Math.trunc(n/10); //? it removes the last value from the number


let n = Number(prompt("Enter a number"));

// * question to find the sum of the entered number
// function sumNum(n){
//     let sum = 0;
//     while(n>0){
//         sum += n%10;
//         n = Math.floor(n/10)
//     }
//     return sum;
// }
// console.log(n);
// console.log(sumNum(n));


// * question to reverse the given number
// function revNum(n) {
    // ? my approach
//     let rev =""
//     while(n>0){
//         rev += n%10;
//         n = Math.floor(n/10)
//     }
//     return Number(rev);
    
     // ? approach in video
//     let rev = 0 ;
//     while(n>0){
//         let rem = n%10
//         rev = (rev*10)+rem
//         n = Math.floor(n/10)   
//     }
//     return rev
// }
// console.log(n);
// console.log(revNum(n));


// * question to find if the given number is stong number or not
// function strongNumber(n){
//     let ogNum = n
//     let sum = 0
//     while(n>0){
//         let lastNum = n%10;
//         let fact = 1
//         for(let i=1; i<=lastNum; i++){
//             fact = fact*i;
//         }
//         sum += fact;
//         n= Math.floor(n/10);
//     }

//     if(sum === ogNum) return true;
//     else return false;

// }
// console.log(n);
// console.log(strongNumber(n));


// * question to find if the given number is automorphic number or not
function numAuto(n){
    let ogNum = n;
    let ten = 1;
    while(n>0){
        ten = ten*10;
        n = Math.floor(n/10);
    }

    let sqNum = Math.pow(ogNum,2);
    let lastDigit = sqNum%ten;
    
    if(lastDigit === ogNum) return true;
    else return false;
}
console.log(n);
console.log(numAuto(n));
