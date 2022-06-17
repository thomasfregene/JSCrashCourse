//object literals
const person ={
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street: '50 main str',
        city: 'Boston',
        state: 'MA'
    }
}

//adding more property to the object
person.email = 'john@gmail.com'

console.log(person);

//destructuring
const {firstName, lastName, address:{city, state}} = person;
console.log(state);