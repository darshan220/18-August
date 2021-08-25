let student  =[
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
    {       localStorage.setItem("student",student)
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
            case 'delete':

                const d = prompt("Enter the index name you want to delete: ")
                //  console.log(student.name);
                console.log(d,"abc");
                console.log(student);

                const abc = localStorage.getItem('name')
                console.log(abc);

                localStorage.removeItem('name')
                console.log(localStorage.getItem('name'));
               
                // const r = student.map(item => {
                            
                //    delete item.name
                //    return item
                    
                // })

                // student = r;
                // console.log(student);

                // const n = student.map((n)=> n.name)
                // console.log(n);
                
                break;

                    default:
                        reject("enter valid data :( ")
            
        }

     
    })
}
