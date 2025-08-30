// ? this module contains pattern program for printing stars in the same line we dont have that property on JS, So we gonna use terminal(NODE.JS)

// *  this is part of node enviroment 
// process.stdout.write("*  ")
// process.stdout.write("*  ")
// process.stdout.write("*  ")

// * nested looping
// for(let i=1; i<=5; i++){
//     for(let i=1; i<=5; i++){
//         process.stdout.write("*  ")
//     }
//     console.log();
// }

// ? Now we taking the value from the promt but now we wna the value from the terminal , So we to install a npm package [prompt-sync] : npm i prompt-sync

// import prompt from 'prompt-sync';
const prompt = require('prompt-sync')();
let n = prompt('Enter the number : ');
// console.log(n);

// for(let i=1; i<=n; i++){
//     for(let i=1; i<=n; i++){
//         process.stdout.write("*  ")
//     }
//     console.log();
// }

// ? NOTE : Outer loop manages COLUMNS  ||  Inner loop manages ROWS

// * print Stars patern in 1st row 1 start and so on...
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("*  ")
//     }
//     console.log();
// }

// * print number patern in 1st row 1 start and so on...
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j+ " ")
//     }
//     console.log();
// }

// * print Alphabet patern in 1st row A start and so on...
// for(i=1; i<=n; i++){
//     for(j=0; j<i; j++){
//         string = String.fromCharCode(65 + j);
//         process.stdout.write( string + " ");
//     }
//     console.log()
// }

// * print Stars patern in 1st row n's number of stars and so on...decreasing to one
for(i=1; i<=n; i++){
    for(j=n; j>=i; j--){
        process.stdout.write("* ")
    }
    console.log()
}