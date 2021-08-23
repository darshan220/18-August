//rest parameter

/*function sum(a=5,b=5,c=5,...args)
{
    let total = 0;
    for (const i of args){
    total += i;
    }
    return total;
}

console.log(sum(1,2,3,4,5,6));*/

function add(...args)
{
    return args
            .filter(function (e)
            {
                return typeof e === "number";
            })
            .reduce(function(num1, num2,num3)
            {
                return num1+num2+num3;
            })
}

let result = add(20,30,null,undefined,20);
console.log(result);
