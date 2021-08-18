// let and var keyword

let x=20;
var y=30;

if (x == 20)
{
    let x= 10;
    console.log(`the output is: ${x}`)
}

console.log(`the output outside bracket is: ${x} and ${y}`)

//using function

for (var i = 0; i<5; i++)
{
    setTimeout(()=> console.log(`The number: ${i}`),3000)
}




