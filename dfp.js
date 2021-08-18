// default function parameter

function dev(bg= 'red', h = '100px', width='100px', border='solid 5px red')
{
    let div = document.createElement('div');
    div.style.height=h;
    div.style.width=width;
    div.style.border=border;
    //div.style.backgroundColor=bg;
    document.body.appendChild(div);
    return div;
}

dev();


//Evaluating default paraeter

function put(toy='beyblade',toybox=[])
{
    console.log(toy);
}

put();
console.log(put('toy car'));