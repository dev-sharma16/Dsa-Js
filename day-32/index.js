// ? DO-WHILE loop is exit control loop in which a certain thing run then the condition is checked if it true then run again or exit

// * printing hello until user say no]
// let user;
// do{
//     console.log("Hello");
//     user = prompt("do you want to continue..? (yes/no)").toLowerCase();

// }while(user === "yes")

// * progrm to guess the number
// let n ;
// let compN = Math.floor(Math.random()*100+1);
// console.log(compN);
// do{
//     n = Number(prompt("Guess the number from 1 to 100"));
//     if(isNaN(n) || n<0 || n>100){
//         console.log("Invalid number");
//         continue
//     }
//     if(n>compN){ 
//         console.log("Your number is bigger then a actual number");
//     } else if(n<compN) {
//         console.log("Your number is smaller then a actual number");
//     } else {
//         console.log("You guesed the right number..! And actual number is :",compN);
//     }
// }while(compN !== n)

// * question to print all the factors and the number

let  n = Number(prompt("enter the number : "));
function findFactors(num){
    for(i = 1; i<=num; i++){
        if(num%i == 0) console.log(i);
    }
}
console.log(findFactors(n));


// TODO : doucment all the question on in module from the website