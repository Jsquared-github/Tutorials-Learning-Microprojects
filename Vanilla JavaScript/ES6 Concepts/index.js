// var --> scoped to function
// let --> scoped to block
// const --> scoped to block ; read only


//Objects//
    // const person = {
    //     name: 'Mosh',
    //     walk: function() {},
    //     talk() {}
    // };

    // person.walk();
    // person.name = '';

    // const targetMember = 'name'
    // person[targetMember.value] = 'John';

//This keyword//

    // Value of 'this' is determined by how a function is called 

    // const person = {
    //     walk(){
    //         console.log(this);
    //     }
    // };

    // Returns reference to object

    // person.walk()

    // Calling a function as a standalone object or outside an object returns a global object (window object in browser)

    // const walk = person.walk;
    // walk();

    // All functions in JS are objects

    // const walk2 = person.walk.bind(person); <-- (The bind method sets the value of 'this' based on the argument passed)
    // walk2();


    // Arrow functions and 'this'//

    // const person = {
    //     talk(){
    //         setTimeout's callback function counts as a standalone object
    //         setTimeout( function (){
    //             console.log('this', this);
    //         }, 1000)
    //         console.log(this);
    //     }
    // };

    // const person = {
    //     talk(){
    //         Arrow functions don't re-bind the 'this' keyword
    //         setTimeout( () => console.log('this',this), 1000);
    //         console.log(this);
    //     }
    // };

    // person.talk();

//Object Destructuring// 

    //Destructuring allows for a more concise way to assign variables

    // const address = {
    //     street: '',
    //     city: '',
    //     country: ''
    // };

    //Both sections of code accomplish the same goal of assigning address object values to variables

    // const street = address.street;
    // const city = address.city;
    // const country = address.country;

    // const {street, city, country} = address;

    //Destructuring also lets you set different variables names

    // const {street: st} = address; <-- same as [const st = address.street;]

//spread Operator//

    // const first = [1,2,3];
    // const second = [4,5,6];

    // Old method of combining arrays
    // const combined = first.concat(second);

    // Spread operator accomplishes the same thing, but allows for adding elements more efficiently
    // const combined = [...first, 'a', ...second];

    // const clone = [...first];
    // console.log(first);
    // console.log(clone);

    //Spread operator can also be used with objects too
    // const first = {name: 'Mosh'};
    // const second = {job: 'Instructor'};

    // const combined = {...first, ...second, location: 'Australia'};
    // console.log(combined);


//Modules AKA Modularity//

    /* 

    Modularity is the idea of separating parts of an application into different files.
    An example would be putting different classes in their own .js file.

    Objects within a module are private by default, so to make it public, you must export and import them.
    
    Example:    [In person.js]-->  export class Person{~~~};

                [In index.js]--> import {Person} from '[related path to person.js]'  
    
    */



