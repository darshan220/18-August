
function clickCounter()
{
  if(typeof(Storage) !== "undefined") 
  {
    if (localStorage.clickcount) 
    {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    //   localStorage.clear();
    } 
    else 
    {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
   }
   else 
   {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
   }
}

// storing array in local storage 

localStorage.setItem('strawhat','luffy')
localStorage.setItem('swordsman','zoro')

let name = localStorage.getItem('strawhat')
console.log(name);

localStorage.removeItem('name')

console.log(localStorage.getItem('name'));

const array = ["OP","DN","OPM","CB"];
localStorage.setItem("Anime",array)