/*console.log("Hello World!");
var num = 10;
console.log(num);
console.log(typeof(num));
num = "Hello";
console.log(num);
console.log(typeof(num));
 num = true;
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));
const a = Symbol(4);
console.log(a);
const b = Symbol(4);
console.log(b);
if (a === b) {
    console.log("a and b are the same");
} else {
    console.log("a and b are different");
} 
num = 10;
var nil = 20;
(num==8&&nil>1) ? console.log("Both num and nil are truthy") : console.log("Either num or nil is falsy");
(num == 5||nil == 2) ? console.log("Either num is 5 or nil is 2") : console.log("Neither num is 5 nor nil is 20");

//var votable = (age<18) ? "Too young to vote" : "Old enough to vote";
 var c = 5;
 var d = 10;
 let result = c+d;
 console.log(result);
 let result2 = c-d;
console.log(result2);
let result3 = c*d;
console.log(result3);
let result4 = c/d;
console.log(result4);
let result5 = c%d;
console.log(result5);

var count;
document.write("starting loop" + "<br/>");
for(count = 0; count < 10; count++){ //initialization 1 time, condition n + 1 times, increment n times
    document.write("current count: " + count);
    document.write("<br/>");}
    document.write("loop ended");*/

//for (let x in person){
    //console.log("" + x + ": " + person[x]);}


   /* const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let b in person) {
    console.log(b + ": " + person[b]);
}

/*var count = 0;
document.write("starting loop" + "<br/>");
while(count < 10){
    document.write("current count: " + count+ "<br/>");
    count++;
}

var age = 20;
if (age < 18) {
    document.write("Too young to vote");
}

var age = 13;
if (age < 18) {
    document.write("you minor af");
}
else {
    document.write("you can vote");
}

var grade = "a";
document.write("blah blah blah <br/>");
switch (grade) {
    case "a": document.write("excellent");
    break;
    case "b": document.write("good");
    break;
    case "c": document.write("average");
    break;
    case "d": document.write("below average");
    break;
    case "f": document.write("fail");
    break;
    default: document.write("invalid grade");
    } 

// we can use default case anywhere in the switch statement, but it is usually placed at the end for better readability

let day = "wednesday";
switch(day){
    case "monday": console.log("monday nay");
    break;
    case "tuesday": console.log("tuesday ok");
    break;
    case "wednesday": console.log("wednesday meh");
    break;
    case "thursday": console.log("thursday almost there");
    break;
    case "friday": console.log("friday yay");
    break;
    case "saturday": console.log("saturday fun");
    break;
    case "sunday": console.log("sunday relax");
    break;
    default: console.log("invalid day");
} */

/*function functinname {parameter-list}
{}*/ ///it is not anonymous 

/*function myFunction(){
    alert("Hello, this is a function!");
}

function hey(){
    alert("stay woke");}

function say(name,age){
    document.write("Hello " + name + ", you are " + age + " years old.");
}*/

//arrow function 
let mul = (x,y) => {console.log(x*y);};
mul(5,10);

//array is a special type of object that can hold multiple values in a single variable. It is a collection of elements, where each element can be of any data type, including numbers, strings, objects, and even other arrays.
//  Arrays are ordered, meaning that the elements are stored in a specific sequence and can be accessed using their index. The index of the first element is 0, the second element is 1, and so on. Arrays are commonly used to store and manipulate lists of data in programming languages.
var myinfo = new Array();
var myinfo2 = Array();

let collection = [{},[],true,"bhoomika",function(){},13,undefined,
null,new String("hey"), new Date()];
collection.teachername = "bhoomika";
collection.phonenumber = 1234567890;

console.log(collection);

console.log(collection[0]);
console.log(collection[1]);
console.log(collection[2]);
console.log(collection[3]);
console.log(collection[4]);
console.log(collection[5]);
console.log(collection[6]);
console.log(collection[7]);
console.log(collection[8]);
console.log(collection[9]);
console.log(collection.length);

