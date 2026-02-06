// Destructuring Assignment
// [] = to perform array destructuring
//{} = to perform object destructuring

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // 2
console.log(b); 

const colors = ['red', 'green', 'blue','black','white'];

[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors); // ['white', 'green', 'blue','black','red']


const color = ['red', 'green', 'blue','black','white'];

const [firstColor,secondColor,thirdColor,...extraColors] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor); // 'blue'
console.log(extraColors); // ['black','white']

//objexct destructuring

const person1 = {
    firstName:'Spongebob',
    lastName:'Squarepants',
    age: 20,
    occupation:'fry cook'
}

const person2 = {
    firstName:'Patrick',
    lastName:'Star',
    age: 20,
    
}

const {firstName, lastName, age, occupation} = person2;

console.log(firstName); // 'Spongebob'
console.log(lastName); // 'Squarepants'
console.log(age); // 20
console.log(occupation); // undefined (since occupation is not defined in person2)

// Destructuring in Function Parameters


function displayCharacter ({firstName, lastName, age, occupation}) {
    console.log(`name:${firstName}${lastName} `);
    console.log(`age:${age} `);
    console.log(`occupation:${occupation} `);
}

const character1 = {
    firstName:'Spongebob',
    lastName:'Squarepants',
    age: 20,
    occupation:'fry cook'
}

const character2 = {
    firstName:'Patrick',
    lastName:'Star',
    age: 20,
    
}

displayCharacter(character1);
displayCharacter(character2);



