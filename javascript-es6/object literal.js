//object literal extensions

let name ='Full name';
let info = {
    [name]: 'Patel darshan',
    'Age': 22,
};

console.log(info[name]);
console.log(info['Age']);


var greeting ={
    fullname:"Patel Darshan",
    greet:(message,name) => {
        console.log(message+ " " + name + "!!");
    }
};

console.log(greeting.fullname);
greeting.greet("hey...", greeting.fullname);






