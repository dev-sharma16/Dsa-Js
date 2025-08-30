// string + string = string (concatenation)
let a = "hello";
let b = "world";
console.log(typeof (a + b));

// string + int = string (concatenation)
let c = "hello";
let d = 16;
console.log(typeof (c + d));

// int + int = number (airthematic operation)
let e = 14;
let f = 16;
console.log(typeof (e + f));

// in js if we use %(mod) and its between int and int then output will be int
let g = 10;
let h = 4;
console.log(g % h);
console.log(h % g); // if the number inside the bracket is smaller then it return the smallest

// in the js if we use /(divide) and its btwn int & int then it will return float
let i = 10;
let j = 3;
console.log(i / j);
console.log(Math.floor(i / j)); // use this function to convert it to int

// q1
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));

// q2
function greet(name, age) {
  let string = "Hello " + name + " you are " + age + " years old ";

  return string;
}
console.log(greet("dev", 21));

// q3
function swaptwo(a, b) {
  let c = a;
  let d = b;
  let temp;

  temp = c;
  c = d;
  d = temp;

  return [c,d];
}
console.log(swaptwo(12,34));

// q4
function swapNumbers(a, b) {
    // Write your logic here
    return [a,b] = [b,a];
}
console.log(swapNumbers(12,34));


