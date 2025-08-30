// * assignment question from day 29
// ? Q.1
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

console.log("2000:"+nt2000+", 500:"+nt500+", 200:"+nt200+", 100:"+nt100+", 50:"+nt50+", 20:"+nt20+", 10:"+nt10+", 5:"+nt5+", 2:"+nt2+", 1:"+nt1);
