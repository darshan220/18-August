//Promise

const a = 2;

const number = new Promise((resolve,reject)=> {
    const random = Math.floor(Math.random()* 3)
    console.log(random)
    if(random === a){
        resolve('your guessed correctly')
    }
    else{
        reject('Wrong number')
    }
})

console.log(number)

number.then((data) => console.log(data))

number.catch((error) => console.log(error))
