// Primitives are Immutable: You cannot alter the original value itself. You can only reassign the variable to a completely new value.
// Non-Primitives are Mutable: You can change, add, or delete properties inside the object without changing its reference.

// Primitive Example
let name = "John";
name[0] = "Y";        // Silently fails. "John" remains unchanged.

// Non-Primitive Example
let user = { name: "John" };
user.name = "Pete";   // Allowed! The object inside is modified.

// Primitive Comparison
console.log(5 === 5);             // true

// Non-Primitive Comparison
// console.log([] === []);           // false (different memory addresses)

let objA = { id: 1 };
let objB = objA;
console.log(objA === objB);       // true (same memory address)

// ## Primitive data types

let digit1 = 1
console.log(typeof(digit1))

let digit2 = 4.6
console.log(typeof(digit2))

let studentName = "Muneeba"
console.log(typeof(studentName))

let char = 'a'
console.log(typeof(char))

let studentName2 = true
console.log(typeof(studentName2))

// typeof null returns "object" because of a historical bug in the first version of the language that was never fixed
// If the lower bits were 000, the engine interpreted the data as an object. The value null was represented as the null pointer, which meant it was entirely composed of zeroes

let data = null
console.log(typeof(data))

let dataa;
console.log(typeof(dataa))

// ---

// ## Non-primitive data types

const student = {
name: 'Muneeba',
age: 32,
}
console.log(typeof(student))

const fruit = ['apple', 'mango', 'orange']

console.log(typeof(fruit))

const sum = (num1, num2) => {
return num1 + num2
}
console.log(typeof(sum))