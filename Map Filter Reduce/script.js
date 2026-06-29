// Filter Questions
// Q1. Given an array of numbers, return a new array containing only the even numbers.
const number = [32, 54, 17, 98, 445, 332, 12, 43, 16]

const output = number.filter((x)=>{
  return x % 2 === 0
})
console.log(output)

// Q2. Remove all falsy values (false, 0, "", null, undefined, NaN) from an array.
const arr = [false, 0, "", null, undefined, NaN, 'Shivam', 22]
const output2 = arr.filter(Boolean)
console.log(output2)
// Q3. Given an array of user objects with {name, age}, return users older than 18.
const users = [
  { id: 1, name: 'shivam', age: '22' },
  { id: 2, name: 'shubhm', age: '21' },
  { id: 3, name: 'mohan', age: '17' },
  { id: 4, name: 'rohan', age: '16' },
]
const output3= users.filter((x)=>
   x.age > 18
).map((x)=>x.name)
console.log(output3)

// Q4. Given a list of products {name, inStock}, return the names of out-of-stock products.
const products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true },
  { name: "Monitor", inStock: false }
]
const output4= products.filter(x=> !x.inStock).map(x=>x.name)
console.log(output4)

// Map Questions
// Q5. Given an array of numbers, return an array of their squares.
const numbers = [2, 4, 3, 6, 5, 8]

// Q6. Given an array of user objects {id, username}, return an array of usernames.
// jsconst users = [
//   { id: 1, userName: 'Mohan' },
//   { id: 2, userName: 'Sohan' },
//   { id: 3, userName: 'Sita' },
//   { id: 4, userName: 'Geeta' },
//   { id: 5, userName: 'Ram' }
// ]
// Q7. Given an array of lowercase strings, return a new array where the first letter is capitalized.
// jsconst words = ['mohan', 'sohAn', 'geeta', 'Chandan']
// Q8. Given an array of ISO date strings, return an array of formatted dates like DD-MM-YYYY.
// jsconst dates = ['2024-01-15', '2023-11-03', '2025-07-22']
// (no array was provided in the file — this is a suggested one for practice)

// Reduce Questions
// Q9. Return the total sum of all numbers in an array.
// jsconst numbers = [2, 5, 3, 6, 8]
// Q10. Count how many times each element occurs in an array of strings.
// jsconst fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange']
// Q11. Using reduce, find the maximum number in an array.
// jsconst numbers = [33, 11, 65, 34, 76, 56, 2, 1044]
// Q12. Given an array of objects with category, group the objects by category.
// jsconst items = [
//   { name: 'Shirt', category: 'Clothing' },
//   { name: 'Pants', category: 'Clothing' },
//   { name: 'Phone', category: 'Electronics' },
//   { name: 'Laptop', category: 'Electronics' },
//   { name: 'Apple', category: 'Food' }
// ]
//  Combined Filter + Map + Reduce Questions...................
// Q. Given an array of products {name, price, inStock}, calculate the total price of all in-stock products.
// Q. Given users with {name, age}, find the average age of all users older than 20.
// Q. From an array with duplicate values, return a new array of only unique values using reduce.
// Q. Given an array of strings, return the longest one using reduce.
// Q. Given an array of words, return the total number of vowels across all words.