// Operators 

// OR Logical 

let hour = 10; 
let weekend = true;

if (hour < 10 || hour > 18 || weekend){
    console.log("the office is closed")
}



var a = 10;
var b = 20; 
var c = a+b;

if (c > 30 && c <= 30)
{
    console.log(true)
}
else{
    console.log(false)
}



let login = prompt("Who's there? " + " Answer : ((Admin))"); 
let usr = "Admin"; 
let pwd = "TheMaster"; 

if (login == false || login == null) 
    {
// Empty feild || null is cancel button or Esc
        alert("Canceled");
    } 
    else if (login != usr) 
    {
// if Admin is have wrong value
        alert("I don't know you"); 
    } 
    else 
    {
// if login == usr
        login = prompt("Password?" + "Answer : ((TheMaster))"); // show password question
    if (login == null || login == false) 
    {
// Empty feild || null is cancel button or Esc
        alert("Canceled");
    } 
    else 
    {
        login == pwd ? alert("Welcome!") : alert("Wrong password"); // if Pasword is true : if Password is wrong
    }

}
