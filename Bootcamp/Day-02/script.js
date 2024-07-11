let age;
document.getElementById("submit").onclick =
function(){
   age= document.getElementById("txt").value;

   age = Number(age);
   age = Boolean(age);
  

    document.getElementById("name").textContent = `${age}`;
    document.getElementById("type").textContent = `${typeof age}`;
}



let r=0;

document.getElementById("submitr").onclick =
function(){
   r= document.getElementById("txtr").value;
   r = Number(r);
let pi =3.14;
let circumfarances = 2*pi*r;
document.getElementById("namer").textContent = `${circumfarances}`;
}