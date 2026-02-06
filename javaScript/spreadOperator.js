//spread operator

let numbers =[1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);


let name = "sachin talreja";
let letters = [...name];

console.log(letters);

let username = "sachin talreja";
let letter = [...username].join("-");

console.log(letters);

let fruit = ["apple", "orange", "banana"];
let newFruits = [...fruit];

console.log(newFruits);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables,"eggs", "milk"];

console.log(foods);