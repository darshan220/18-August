// For each fnction

function fun()
{
    const items=[20,24,35];
    const copy=[];
    items.forEach(function (item){
        copy.push(item + item+2);
    });

    console.log(copy);
}

fun();

