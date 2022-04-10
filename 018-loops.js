// for loop
for(let i = 0; i < 10; i++) {
    break;
}

const person = {
    name: 'Edson',
    lastName: 'Pagani',
    age: 20
}

// for in loop (usar em objetos)
for (let property in person) {
    console.log(property, "=", person[property])
}
/* 
Output:
name = Edson    
lastName = Pagani
age = 20
*/

const text = "Edson"
const numbers = [10, 5, 3, 7, 15]

// for of loop (usar em arrays)
for(let t of text) {
    console.log(t)
}
/* 
Output:
E
d
s
o
n
*/

for(let n of numbers) {
    console.log(n)
}
/*
Output:
10
5
3
7
15
*/

let i = 0
// while
while(i < 10) {
    console.log(i)
    i++
}

// do while
let x = 15
do {
    console.log(x)
    x++
}
while(x < 10)