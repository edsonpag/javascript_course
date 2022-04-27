class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`Olá, meu nome é ${this.name}. Tenho ${this.age}`)
    }
}

const person1 = new Person('Edson', 18)
person1.speak()