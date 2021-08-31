export {}
const char = 'darshan';

console.log(char);

//variable Declarations

let x = 10;
let y = 20;

let sum= x+y;
console.log(sum);

const title = 'Typescript';
console.log(title);

//variable types
//Assigning types to variable 
//typescript helps with statc type checking 

let isbeginner: boolean = true;

let a: number = 100;

let name : string = 'darshan'

let intro : string = `My name is ${name} and I am a beginner in typerscript`
 
console.log(intro);

//we can also assign value to null and undefined to either boolean, string or a number type  variable
let n : null = null;
let u : undefined = undefined ;

let isnew : boolean = null;
let myname: string = undefined;

//can declare array of value using array types
//Two syntax:

//1)
    let list1: number[] = [1,2,3,4,5];

//2)
    let liste2: Array<number> = [1,2,3]

//Tuple contain one single string and one single number value
//fixed number of value with diff types use tuple

let person: [string,number] = ['darshan',22]

// let person1: [string,number] = ['22','darshan'] //can not write 
// let person1: [number,string] = ['22','darshan'] //can not swap type 

//Enum keyword
//enum value start with 0
//can also define specific value 

enum color {Red,Green,Blue} //Red = 0,Green= 1 and Blue= 2 
let c : color = color.Green;
console.log(c);

enum name1 {darshan = 5,hitesh,hiren}
let b : name1 = name1.hitesh
console.log(b);

//any type 
//it allow us to assign any value to variable

let randomvalue : any = 10;

randomvalue =true;

randomvalue = 'patel'

console.log(randomvalue);

//unknown type 

let variable: unknown = 10;

function hasname(obj: any): obj is {name: string}{
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if(hasname(variable)){
    console.log(variable.name);
}

// (variable as string).toUpperCase();

//multiple type 

let multitype: number | boolean;
//this way we can assign number and boolen to variable multitype 
multitype = 20; 
multitype = true;
console.log(multitype);

//functions 

 function add(num1: number, num2: number) : number{
     return num1+num2
 }
// add(5,5)
console.log(add(5,5));

function mul(num1: number, num2: string){
    return num1+num2
}
// mul(5,'10')
console.log(mul(5,'..yo'));

//optional parameter
//In typescript it is required to use parameter with function if you can't pass parameter then it throws error
//optional must always be after required parameter

 function optional(num1: number, num2?: number) : number{
    if(num2) 
        return num1*num2
    else
        return num1
 }
console.log( optional(5));

//Default Parameter 

function default1(num1: number, num2: number = 10) : number{
    if(num2) 
        return num1*num2
    else
        return num1
 }
console.log( default1(5));

//Interface 

interface person
{
    firstname: string, 
    lastname:string
}

function fullName(person: person){
        
        console.log(`${person.firstname} ${person.lastname}`);

}

let p = {
    firstname: 'luffy',
    lastname: 'Dragon'
}
fullName(p)

//Class and access modifiers

 class student {
    studentname: string

    constructor(name:string){
        this.studentname = name;
    }

    greet()
    {
        console.log(`Good morning ${this.studentname}`);
    }
 }

 let stu = new student('Gon');
 console.log(stu.studentname);
 stu.greet()
 

class teacher extends student {
    constructor(teachername:string){
        super(teachername)
        //we use super keyword to call base class constructor
    }

    //call method 
    work(){
        console.log(`hello`);
        
    }
}
    
let m1 = new teacher('bruce')
m1.work()
m1.greet()
console.log(m1.studentname);

//access modifire s

//There are three typeof access modifire 

//Public: accessable for everyone, can use public keyword 
//Protected:only the main class and his derived class can access protected members 
//Private:it can not access outside of its containing class, can not access private member in derived class      

