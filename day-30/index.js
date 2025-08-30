// * problem to findout the sum of even and odd till a number

// let number = Number(prompt("enter a number: "))
// let evenSum = 0 ; oddSum = 0

// for(i=1; i<=number; i++){
//     if(i%2 == 0){
//         evenSum += i;
//     } else{
//         oddSum += i;
//     }
// }

// console.log("Sum on even number till "+number+" is : "+evenSum);
// console.log("Sum on odd number till "+number+" is : "+oddSum);


// * finding factors of the given number

// ? note: when we find the factors of teh given number , the last factor is always its half of it so dont run the loop till number rather then run till half of it and include last number itself in last in the code..!

// let number = Number(prompt("enter a number: "))

// for(let i=1; i<=number/2; i++){
//     if(number%i == 0) console.log(i);
// }
// console.log(number);


// * finding of the number is prime or not

// ? note: its same as the factorial problem the last number which can divide the number is half of it so we only run loop half..!

let number = Number(prompt("enter a number: "))
let isPrime = true;

if(number <= 0){
    console.log("Invalid number");
} else if (number == 1) {
    isPrime = true;
    console.log(isPrime?"Is a prime number":"Is not a prime number");
} else {
    for(let i=2; i<=number/2; i++){
        if(number%i == 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime?"Is a prime number":"Is not a prime number");
}