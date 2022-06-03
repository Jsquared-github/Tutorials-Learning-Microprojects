class Person{
    constructor(age, name) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}
module.exports = Person;