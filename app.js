document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('getPosts').addEventListener('click',getPosts);
document.getElementById('addPost').addEventListener('submit',addPost);


// const el = document.querySelectorAll(".d-flex.justify-content-between")

// const btn = document.getElementById("getText")

// btn.addEventListener('click', function() {
//     el.forEach(item => {
//     item.style.border = "none"
// })
// })

function getText(){

    fetch('fetch.txt')
        .then((res)=> res.text())
        .then((data) => {
           
            document.getElementById('output').innerHTML = data;
        })
        .catch((err)=> console.log(err))

}

function getUsers(){
    fetch('fetch.json')
        .then((res)=> res.json())
        .then((data)=> {
            let op = '<h2 class="mb-4 text-center">Users</h2>';
            data.forEach((user)=> {
                op += `
                    <div class="">
                    <ul class="">
                        <li class="list-group-item ">${user.id}</li>
                        <li class="list-group-item ">${user.name}</li>
                        <li class="list-group-item ">${user.class}</li>
                    </ul>
                    </div>
                `
            })
            document.getElementById('op').innerHTML = op;
        })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
        .then((res)=> res.json())
        .then((data)=> {
            let op = `<h2 class="mb-4 text-center">Posts</h2>`
            data.forEach((post)=> {
                op +=`
                    <div>
                    <h2 class="list-group-item name">${post.title}</h2>
                    <p class="name">${post.body}</p>
                    <div>
                `;
            })
            document.getElementById('api').innerHTML = op;
        })
}

function addPost(e){

    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2',
    {
        method : 'POST',
        headers: {
            'Accept':'application/json,text/plain, */*',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({title:title,body:body})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

document.getElementById('clear').addEventListener('click',Clear)

function Clear()
{
    document.getElementById('addPost').reset()
    document.getElementById('api').innerHTML = " ";
    document.getElementById('op').innerHTML = " ";
    document.getElementById('output').innerHTML = " ";
   
}

Clear()




































