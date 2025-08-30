//  * these are the math funciton
console.log(Math.ceil(10.1)); // ? roundof +
console.log(Math.floor(10.3)); // ? roundof -
console.log(Math.round(10.4)); // ? if above or equals to .5 then + or less then .5 _
console.log(Math.abs(8)); // ? gives the absolute value
console.log(Math.trunc(10.18832448)); // ? removes any decimal value
console.log(Math.pow(10, 2)); // ? multiply some number by particular power
console.log(Math.sqrt(8)); // ? squareroot
console.log(Math.cbrt(27)); // ? cuberoot
console.log(Math.max(10, 20, 46, 28)); // ? find max
console.log(Math.min(10, 9, 37, 49)); // ? find min
console.log(Math.random()); // ? generates the random number
console.log(Math.random() * 9000); // ? 0 to 9999
console.log(Math.trunc(Math.random() * 9000 + 1000)); // ? 1000 to 9999 , kind of OTP generator for 4-digit

// !---------------------------------------------------------

//  * extra funtion
let a = 234.454;
console.log(a.toFixed(2)); // ? you fix the number you wants from the decimal point, and also it retrun string so convert it if you want ta number

// !---------------------------------------------------------

// * checking even and odd with ifElse
// let b = Number(prompt("Enter number : "));

// if (b % 2 == 0) console.log(b + " is a even number");
// else console.log(b + " is a odd number");

// !---------------------------------------------------------

let amount = Number(prompt("Enter the amount"));
let nt2000 = 0, nt500 = 0, nt200 = 0, nt100 = 0;
let nt50 = 0, nt20 = 0, nt10 = 0, nt5 = 0, nt2 = 0, nt1 = 0;

if(amount >= 2000){
    nt2000 = Math.trunc(amount/2000);
    amount = amount - (2000*nt2000);
} if (amount >= 500) {
    nt500 = Math.trunc(amount/500);
    amount = amount - (500*nt500);
} if (amount >= 200) {
    nt200 = Math.trunc(amount/200);
    amount = amount - (200*nt200);
} if (amount >= 100) {
    nt100 = Math.trunc(amount/100);
    amount = amount - (100*nt100);
} if (amount >= 50) {
    nt50 = Math.trunc(amount/50);
    amount = amount - (50*nt50);
} if (amount >= 20) {
    nt20 = Math.trunc(amount/20);
    amount = amount - (20*nt20);
} if (amount >= 10) {
    nt10 = Math.trunc(amount/10);
    amount = amount - (10*nt10);
} if (amount >= 5) {
    nt5 = Math.trunc(amount/5);
    amount = amount - (5*nt5);
} if (amount >= 2) {
    nt2 = Math.trunc(amount/2);
    amount = amount - (2*nt2);
} if (amount >= 1) {
    nt1 = Math.trunc(amount/1);
    amount = amount - (1*nt1);
}

console.log("2000: "+nt2000+" 500: "+nt500+" 200: "+nt200+" 100: "+nt100+" 50: "+nt50+" 20: "+nt20+" 10: "+nt10+" 5: "+nt5+" 2: "+nt2+" 1: "+nt1);
