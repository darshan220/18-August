//Filter and Find method

const student  =[
    {
        name: 'darshan',
        surname:'patel',
        email:'danpatel22@gmail.com',
        age: 22,
    },
    {
        name: 'Hitesh',
        surname:'Chhatvani',
        email:'hiteshc@gmail.com',
        age: 40,
    },
    {
        name: 'Hiren',
        surname:'Jadvani',
        email:'hirenj@gmail.com',
        age: 15,
    },
    {
        name: 'Sahil',
        surname:'patel',
        email:'sahilp@gmail.com',
        age: 30,
    },    

];

//filter 

const info = student.filter((ninja)=> {
    if (ninja.age > 30 ){
        return ninja; 
    }
});

console.log(info);


const surName = student.filter((tsm)=>tsm.surname === 'patel');
console.log(surName);

//find method 

const darshan = student.find((cloud)=> cloud.name === 'darshan');
console.log(darshan);

const email = student.find((cs)=> cs.email === 'abc@gmail.com');
console.log(email);









