//Arrays- variables that hold multiple values

//array constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//mostly used
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
//adds element to the end of an array
fruits.push('mangoes')
//adds element at the beginning of an array
fruits.unshift('strawberries');
//remove the last element from an array
fruits.pop();
//checks if variable is an array
console.log(Array.isArray(fruits));
//checks the index of an element in an array
console.log(fruits.indexOf('oranges'));

console.log(fruits);