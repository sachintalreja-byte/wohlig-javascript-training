function* greeting(name){
    yield "Hello"
    yield "How are you"
    yield name
}

const greet = greeting("Sachin");

console.log(greet.next().value)
console.log(greet.next().value)
console.log(greet.next().value)

const greet2 = greeting('Sachin')
for(text of greet2){
    console.log(text)
}

function* getNumber(num){
    while(true){
        yield num++;
    }
}

const getNum = getNumber(10);

console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)
console.log(getNum.next().value)

