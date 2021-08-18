// Destructuring 

let a,b;
[a,b] = [10,20];
//console.log(a,b);

//array destructuring 
[aa,bb,cc,...d]=[1,2,3,4,5,6,7,8,9,10];
console.log(aa,bb,c,d);

({a,b,c,...d}={a:10, b:20, c:30, d:40, e:50, f:60})
console.log(a,b,c,d);

//object destructuring 

const info ={
    name: "patel darshan",
    age: "22",
    gender: "Male",
    start: function(){console.log("started");}
}

const {name:darshan,age,gender,start} = info;
console.log(darshan,age,gender);
start()