/* 
Author :Pirashanth
Date : 11/07/2024
Bootcamp Day 01 - Developers stack
*/


// 1. console.log("hi");

// 2. window.alert('hello');

// 03.variables

let x = 20;
let y = 30.05;
let z = "Shanth";
let A = true;


console.log(x);
console.log(y);
console.log(z);
console.log(A);



console.log(typeof(x));
console.log(typeof y);
console.log(typeof z);
console.log(typeof A);


// 04.Arithmetic Operators

x=x+y;
console.log(x);

// 05.Augmented Operators

x += y; // x + y
console.log(x)

x -= y; // x - y
console.log(x)

x *= y; // x * y
console.log(x)

x /= y; // x / y
console.log(x)

x = 101 % 5; // moduler
console.log(x)


// 06. User Input

/*
let username;
username = window.prompt("Enter user name");
console.log(username);  
*/

let username;
document.getElementById("submit").onclick =
function(){
    username = document.getElementById("txt").value;
    console.log(username); 
    
    document.getElementById("name").textContent = `${username}`;
}