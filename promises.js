let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
})

promise.then(result => console.log(result))
.catch(error => console.log(error));

async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetchin data:", error);

    }
}

const fecthData = async () => {
    try {
        const response = await fetch("https://api.example.com")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error);
    }

}


// Fetch Api

// Get request from api

fetch("https://api.example.com")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error:", error))

fetch("https://api.exxample.com", {
    methon: "POSt",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({name: "John", age: 30})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error))


// ES6 classes

class Person {
    constructor(name,age) {
        this.name = name,
        this.age = age
    }

    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
    }
}

let john = new Person("John", 30);
john.greet

// Local Storage
// Store Item from local Storage
localStorage.setItem("username", "john_doe");

// retrieve item from local storage
let username = localStorage.getItem("username");

// Remove item from local storage
localStorage.removeItem("username");

// Clear all item from local storage
localStorage.clear();


//Event Delegation
document.querySelector("#paramentElement").addEventListener("click", function(event) {

    if (event.target && event.target.matches("button.className")) {
        alert("Button clicked!");
    }
});


//Destructuring
let person = {name: "John", age: 30, city: "New York"};
let {name, age, city} = person;
console.log(name,age,city);

let array = [1,2,3,4];

let [first, second,third] = array;
console.log(first,second,third);


//Template Literals
let name2 = "John";
let age2 = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

//Spread and rest operators
let arr1 = [1,2,3,4]
let arr2 = [...arr1, 5,6,7];
console.log(arr2);

let obj1 = {a:1, b: 2, c:3}
let obj2 = {...obj1, d: 4}
console.log(obj2);

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);

}
console.log(sum(1,2,3,4,5));