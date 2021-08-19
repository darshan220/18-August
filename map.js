// map method 

const student  =[
    {
        name: 'darshan',
        surname:'patel',
        email:'danpatel22@gmail.com',
    },
    {
        name: 'Hitesh',
        surname:'Chhatvani',
        email:'hiteshc@gmail.com',
    },
    {
        name: 'Hiren',
        surname:'Jadvani',
        email:'hirenj@gmail.com',
    },
    {
        name: 'Sahil',
        surname:'patel',
        email:'sahilp@gmail.com',
    },    
];

const info = student.map((person)=> `${person.name} ${person.surname}`);
console.log(info);

const getemail = (person) => person.email;
const email = student.map(getemail)
console.log(email);

const newpeople = student.map((person)=> {
    return{
        firstName : person.name.toUpperCase(),
        surName: person.surname.toLowerCase(),
    }
});
console.log(newpeople);

const names = student.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML=names.join('');
