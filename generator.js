//genetator 
// it generator vale  with yield keyword rathan than return.

function* numGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){
        yield i++;
        yield (i++).toString();
    }
}

const gen = numGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
