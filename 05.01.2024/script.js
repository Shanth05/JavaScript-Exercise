/* 1st Method
document.getElementById("mySubmit").onclick=function(){
    let myName = document.getElementById("myName").value;
    console.log(myName);
}

*/
/*2nd Method */
document.getElementById("mySubmit").addEventListener("click",myFunction);
function myFunction(){
    let myName = document.getElementById("myName").value;
    console.log(myName);  

    if(myName.length==0){
        document.getElementById("msg").innerText= ""; 
    }
    else{
        document.getElementById("msg").innerText= `your name is ${myName}`; 
    }
}
