//Today's Topic
//Callback
// Promises
// Promise chaining
// Promise all
// converting to promises
// Async Await Examples


//Callback method

// function makeUppercase(value)
// {
//     console.log(value.toUpperCase());
// }

// // makeUppercase('darshan')

// function reverseString(value)
// {
//     console.log(value.split('').reverse().join(''));
// }

// function handleName(name,cb)
// {
//     const fullname = `${name} patel`
//     cb(fullname)
// }

// // handleName('darshan', makeUppercase)
// // handleName('darshan', reverseString)

// handleName('darshan', (value)=> console.log(value));

//after 1s first red;
//after 3s second blue;
//after 4s third green;

// const first = document.querySelector('.first')
// const second = document.querySelector('.second')
// const third = document.querySelector('.third')

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function(){
//     setTimeout(() => {
//         first.style.color = 'red'

//         setTimeout(() => {
//             second.style.color = 'blue'
            
//             setTimeout(() => {
//                 third.style.color = 'green'
//             }, 2000)

//         }, 3000)

//     }, 1000);
    
  
// })

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

const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    
    setTimeout(() => {

        console.log("Name of all student");
        const info = student.map((user)=> `${user.name}`)
        console.log(info);

        setTimeout(() => {

            console.log("Same surname:");
            const surName = student.find((f)=> f.surname === 'patel')
            console.log(surName.name);
    
        }, 2000);

        setTimeout(() => {
        
            console.log("Email of particular student")
            const email = student.filter((e)=> e.email === 'danpatel22@gmail.com')
            console.log(email);
        }, 3000);

    }, 1000);

    

  
})


