//Promise Method


var num1=0, num2= 1, n,i;

function fibonacci (){

    return new Promise((resolve,rejected) =>{

        var num = parseInt(prompt("Enter the Number"))

        if (Number.isInteger(num))
        { 
            for (i = 1;i<=num; i++)
            {
                document.write("<br>"+ num1);  //print the first number 
                n=num1+num2; 
                num1=num2;
                num2=n;
            }
            resolve(num)
        }
        else
        {
            rejected('Reject')
        }
    })
}

console.log(fibonacci())

// another example.........


// const server =true;

// let check = new Promise((resolve,reject)=> {
//     if (server)
//     {
//         resolve("Server is online :)")
//     }
//     else{
//         reject("Server is down :(")
//     }
// })

// console.log(check);
