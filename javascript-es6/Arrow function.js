// Arrow Function 

//using normal function
let numbers =[5,10,15];

numbers.sort(function(a,b){

    return b-a;

});

console.log(numbers);


//using arrow  function

let num=[50,100,20];

num.sort((p,q)=> q-p);

console.log(num);


//string's length using arrow function

let name = ['darshan','hitesh','sahil','jay'];

let lengths = name.map(name => name.length);

console.log(lengths);





















