// sorting method 

const names =['florin','liam','jai','ivan'];

names.sort();

console.log(names);



const numbers =['10','20','5','29','15'];

numbers.sort(compare);

function compare (a,b){
    return a-b;
}

console.log(numbers);

let s= "it was cold freazzing and dark night";
let words=s.split(/\W+/).filter(word => word.length > 2);
words.sort((a,b)=> a.length - b.length);
console.log(words);












