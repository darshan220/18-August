// nested function

var up = document.getElementById('GFG_up');
var down = document.getElementById('GFG_down');

up.innerHTML = "Click on the button to call nested function";

function fun1(a)
{

    function fun2(b)
    {
        return a+b;
    }
     return fun2;
     
}

function GFG_fun(){
    down.innerHTML=fun1(`yo `)("what's up??");
}













