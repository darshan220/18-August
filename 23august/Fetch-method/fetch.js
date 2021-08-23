 
 document.getElementById('getText').addEventListener('click',getText);
 document.getElementById('getUsers').addEventListener('click',getUsers);
 document.getElementById('getPosts').addEventListener('click',getPosts);
 document.getElementById('addPost').addEventListener('click',addPost);


    function getText(){
            // fetch('demo.txt')
            // .then(function(res){
            //     return res.text();
            // })
            // .then(function(data){
            //     console.log(data);
            // });

            fetch('demo.txt')
            .then((res)=> res.text())
            .then((data)=> {
                document.getElementById('output').innerHTML = data;
            })
            .catch((err) => console.log(err))
    }

    function getUsers(){
            fetch('data.json')
            .then((res)=> res.json())
            .then((data)=> {
                let output  = '<h2 class="mb-4">Users</h2>';
                data.forEach(function(user){
                    output += `
                        <ul class="list-group mb-3">
                            <li class="list-group-item">ID:${user.id}</li>
                            <li class="list-group-item">ID:${user.name}</li>
                            <li class="list-group-item">ID:${user.email}</li>
                        </ul>
                    `;
                })
                document.getElementById('output').innerHTML = output;
            })
    }

    function getPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then((res)=> res.json())
        .then((data)=> {
            let output  = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function(post){
                output += `
                    <div class="card card-body mb-3">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;

    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3',{
        method: 'POST',
        headers:{
             'Accept':'application/json,text/plain, */*',
             'Content-type':'application/json'
        },
        body:JSON.stringify({title:title,body:body})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

     

   









