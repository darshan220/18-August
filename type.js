"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var char = 'darshan';
console.log(char);
//variable Declarations
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
var title = 'Typescript';
console.log(title);
//variable types
//Assigning types to variable 
//typescript helps with statc type checking 
var isbeginner = true;
var a = 100;
var name = 'darshan';
var intro = "My name is " + name + " and I am a beginner in typerscript";
console.log(intro);
//we can also assign value to null and undefined to either boolean, string or a number type  variable
var n = null;
var u = undefined;
var isnew = null;
var myname = undefined;
//can declare array of value using array types
//Two syntax:
//1)
var list1 = [1, 2, 3, 4, 5];
//2)
var liste2 = [1, 2, 3];
//Tuple contain one single string and one single number value
//fixed number of value with diff types use tuple
var person = ['darshan', 22];
// let person1: [string,number] = ['22','darshan'] //can not write 
// let person1: [number,string] = ['22','darshan'] //can not swap type 
//Enum keyword
//enum value start with 0
//can also define specific value 
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {})); //Red = 0,Green= 1 and Blue= 2 
var c = color.Green;
console.log(c);
var name1;
(function (name1) {
    name1[name1["darshan"] = 5] = "darshan";
    name1[name1["hitesh"] = 6] = "hitesh";
    name1[name1["hiren"] = 7] = "hiren";
})(name1 || (name1 = {}));
var b = name1.hitesh;
console.log(b);
//any type 
//it allow us to assign any value to variable
var randomvalue = 10;
randomvalue = true;
randomvalue = 'patel';
console.log(randomvalue);
//unknown type 
var variable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(variable)) {
    console.log(variable.name);
}
// (variable as string).toUpperCase();
//multiple type 
var multitype;
//this way we can assign number and boolen to variable multitype 
multitype = 20;
multitype = true;
console.log(multitype);
//functions 
function add(num1, num2) {
    return num1 + num2;
}
// add(5,5)
console.log(add(5, 5));
function mul(num1, num2) {
    return num1 + num2;
}
// mul(5,'10')
console.log(mul(5, '..yo'));
//optional parameter
//In typescript it is required to use parameter with function if you can't pass parameter then it throws error
//optional must always be after required parameter
function optional(num1, num2) {
    if (num2)
        return num1 * num2;
    else
        return num1;
}
console.log(optional(5));
//Default Parameter 
function default1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 * num2;
    else
        return num1;
}
console.log(default1(5));
function fullName(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'luffy',
    lastname: 'Dragon'
};
fullName(p);
//Class and access modifiers
var student = /** @class */ (function () {
    function student(name) {
        this.studentname = name;
    }
    student.prototype.greet = function () {
        console.log("Good morning " + this.studentname);
    };
    return student;
}());
var stu = new student('Gon');
console.log(stu.studentname);
stu.greet();
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(teachername) {
        return _super.call(this, teachername) || this;
        //we use super keyword to call base class constructor
    }
    //call method 
    teacher.prototype.work = function () {
        console.log("hello");
    };
    return teacher;
}(student));
var m1 = new teacher('bruce');
m1.work();
m1.greet();
console.log(m1.studentname);
//access modifire s
//There are three typeof access modifire 
//Public: accessable for everyone, can use public keyword 
//Protected:only the main class and his derived class can access protected members 
//Private:it can not access outside of its containing class, can not access private member in derived class      
