//Fetch API data 

var user = {
    "name" : "Monkey D. Luffy",
    "age" : "19"
}

let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
}

// console.log(options);

let f = fetch("https://jsonplaceholder.typicode.com/posts/4");

f.then(res=> res.json())
 .then(d => {
     console.log(d);
 }) 



