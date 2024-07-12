function printMessage(firstname,lastname){
    console.log("hi");
    console.log(`Hi I am ${firstname} and ${lastname}`);
}

printMessage("Pirashanth","Subiramaniam");


function addTwoNumbers(x,y){
    let total = x+y;
    return total;
}

let add =addTwoNumbers(15,20);
console.log(add);

// local and global

let x=15 //Global

function one(){ // Local
    let x=10;
}
function one(){
    let x=25;
 }