//async and await 

// var num1= 0, num2=1, n,i;

// const getdata= async() =>{
       
//         try{

//           const user = await fibonacci(num = parseInt(prompt("Enter the Number: "))); 
          
//         }
//         catch{
//             console.log("Error");
//         }
// }
// getdata()

// function fibonacci(num){   

//     return new Promise((resolve,reject)=>{

//         if (Number.isInteger(num)){

//             for(i=1;i<=num;i++)
//             {   
//                 console.log(num1)
//                 n=num1+num2;
//                 num1=num2;
//                 num2=n;
//             }
                
//             resolve(num)
//         }
//         else
//         {
//             reject("Rejected")
//         }
       
//     })
// }

// console.log(fibonacci());

// let Anime = prompt("Do you watch anime")
// let No = "yes"
// if (Anime.localeCompare(No)=== 0)
// {
//     alert("what are you watchin right now ")
// }
//     else
//     {
//         alert("you are not weeb")
//     }

// console.log(Anime.localeCompare(No), No);



// const NAME = "name";
// const SURNAME = "surname";
// const EMAIL = "email";

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

const getdata = async () =>{
    try
    {
            const user = await find(input = prompt("What do you want?"))
    }
    catch(e)
    {
        console.log("Error....",e);
    }
}
getdata()

function find()
{

    return new Promise((resolve,reject)=> 
    {
        
        // console.log("input", input);

        switch(input)
        {

            case 'name': 
            {
                    const n = student.map((n)=> n.name)
                    console.log(n);
                    resolve(n)
                    break;
            }
            case 'surname': 
            {
                    const s = student.filter((sn)=> sn.surname == 'patel')
                    console.log(s);
                    resolve(s)
                    break;
            }
            case 'email': 
            {      
                    const e = student.find((e)=> 
                {
                if (e.age >30)
                {
                    console.log(e.email);
                    resolve(e.email)
                }
            })
                    break;
            }
                    default:
                        reject("enter valid data :( ")
            
        }

     
    })
}


