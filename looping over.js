//looping over objects

//Three technique 
//object.key()
//object.values()
//object.entries()

const user = {
    name: "Darshan",
    age: 22,
    occupation: "Web Developer"
};

// console.log(Object.keys(user));

for(const key of Object.keys(user)){
    console.log(`${key} =>   ${user[key]}`);
}

//using values()

console.log(Object.values(user));

//using entries() 

// console.log(Object.entries(user));

for (const entry of Object.entries(user)){
    console.log(`${entry[0]} => ${entry[1]}`);
}

