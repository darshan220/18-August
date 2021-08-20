// promise.all() method 


//promise method 
const timeout = (t) => {
    return new Promise((resolve,rejected)=> {
        setTimeout(()=>
        {
            if (t === 2000){   
            resolve(`Completed in ${t}`)
            }
            else{
            rejected(`Rejected in ${t}`)
            }
        },t)
    })
}

const duration = [5000,3000,2000,4000,6000]

const promises = []

duration.map((duration)=> {
    //calling the async function (timeout()). 
    // pushing the pending promise to an array. 
    promises.push(timeout(duration))
})

console.log(promises)


//passing an array of pending promises to promises.all 
//promises.all will wait till all the  promises and then the save gets resloved.

Promise.all(promises)
.then(response => console.log(response))
//.catch(error => console.log(`error in executing ${error}`))









