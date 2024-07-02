let numbers = [1,2,3,4,5,6];

let doubled = numbers.map(num => num * 2);

let evens = numbers.map(num => num % 2 === 0);

let sum = numbers.reduce((total, num) => total + num, 0);

numbers.forEach(num => console.log(num));

let firstEven = numbers.find(num => num % 2 === 0)
