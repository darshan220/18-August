//promise chaining 

let p = new Promise((resolve,rejected) =>{

        setTimeout(()=> {
            resolve(10);
        },3000);
})

p.then((ans)=> {
    console.log(ans);
    return ans * 2;
})
.then((ans)=> {
    console.log(ans);
    return ans * 3;
})
.then((ans)=> {
    console.log(ans);
    return ans * 4;
})


//


let q = new Promise((resolve,rejected) =>{

    setTimeout(()=> {
        resolve(10);
    },3000);
})

q.then((demo)=> {
console.log(demo);
return demo * 2;
})

q.then((demo)=> {
    console.log(demo);
    return demo * 3;
    })

    
    q.then((demo)=> {
        console.log(demo);
        return demo * 4;
        })


            







