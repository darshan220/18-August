//iterator  

function iterator(values){

    let index=0;

    return{
        next: function(){
            if (index<values.length){
                return{
                    value: values[index++],
                    done:false,
                }
            }
            else{
                return{
                    done:true 
                }
            }
        }
    }
}

const array=['apples','grapes','banana','orange'];
console.log(`My array is: ${array}`);

const fruit = iterator(array);
console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)