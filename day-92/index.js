//* Class and Objects in OOPs

// js is prototype based language not a class based 
// the class and constructer fucniton are inly for familiar syntax its natively called constructor function.


//* For using Inheritance 

// As there is noe real classes we can extends the class rather then we use 'Prototype'.
// In Js every obj has its own object colled prototype and thaht contains all the special funciton like array functions.

//? we can add custom protoype to the obj:

// let obj = {
//     name: "Dev" ,
//     age: 22
// }

// let temp = { // Custom prototype
//     name: "Kartik",
//     age: 21,

//     function(){
//         console.log("Pdhh rha hai kya.?");
//     }
// }

// obj.__proto__ = temp;
// console.log(obj);


//* Practise problem
// Building an Cab service

const prompt = require('prompt-sync')();

class CabService{
    constructor(){
        this.car_type = "",
        this.bill = this.km = 0.0
    }

    accept(){
        this.car_type = prompt("Enter car type : Ac or Non-Ac -> ")
        this.km = Number(prompt("Enter km travelled -> "))
    }

    calculate(){
        if (this.car_type === 'Ac') {
            if(this.km <= 5){
                this.bill = 150;
            } else {
                this.bill = 150 + (this.km - 5) * 10
            }
        } else if(this.car_type === 'Non-Ac'){
            if(this.km <= 5){
                this.bill = 120;
            } else {
                this.bill = 120 + (this.km - 5) * 8
            }
        }
    }

    display(){
        console.log("Car type : "+ this.car_type);
        console.log("Distance travelled : "+ this.km);
        console.log("Total bill : "+ this.bill);
    }
}

let obj = new CabService();

obj.accept();
obj.calculate();
obj.display();

