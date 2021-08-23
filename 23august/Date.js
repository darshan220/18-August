// Javascript Dates


const a = new Date ('july 22, 2000');

const b = new Date ('july 21, 2000')

console.log(a === b);

console.log(a-b);

//Date.now()

const c = Date.now();

console.log('Starting timer...');

setTimeout(() => {
    
    const millis = Date.now() - c;

    console.log(`Second elapsed = ${Math.floor(millis/1000)}`);
}, 2000);

//