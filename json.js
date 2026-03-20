/*let text = '{"employees":['+'{"firstName":"John","lastName":"Doe"},'+'{"firstName":"Anna","lastName":"Smith"},'+'{"firstName":"Peter","lastName":"Jones"}]}';
obj = JSON.parse(text);
console.log(obj);
console.log(obj.employees[0].firstName);
console.log(obj.employees[1].firstName);

// arrow is an higher order function
// and it can be passed as an argument to another function
// and it can be returned by another function

const add = (x,y) => x+y; 
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

// if only 1 line in arrow function then we can omit the curly braces and the return keyword

 asynchornous programming 
promise / async await 
1. pending 
2. resolved
3. rejected */

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Promise resolved successfully");
    }
    else {
        reject("Promise rejected");
    }
}); 
promise.then((result => console.log(result))
).catch((error => console.log(error))); 

async function fetchData(){
    let response = await
    fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch (error => console.log(error));