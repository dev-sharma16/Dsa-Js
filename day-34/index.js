// ? Advanced Nested loops

const prompt = require('prompt-sync')();
let n = Number(prompt('Enter the number : '));

// * program to print the mirror-right of the half pyramid
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write("_");
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// * print V shape with number n
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n*2; j++){
//         if(i==j || i+j==n*2){ 
//             process.stdout.write("*")
//         } else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();   
// }

// * print X pattern
for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==j || i+j==n+1){ 
            process.stdout.write(" *")
        } else{
            process.stdout.write("  ")
        }
    }
    console.log();   
}

