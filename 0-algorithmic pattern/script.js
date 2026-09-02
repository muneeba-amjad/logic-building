// Basic Accumulation & Ranges — "The Bucket" Pattern
// Initialize a tracker at 0 or 1, iterate through a clean range, and collect values into it.
// ========================
// PATTERN 1
// Basic Accumulation & Ranges — "The Bucket" Pattern
// ========================
// 1. Print all numbers from 1 to n and find their total sum.
// its simple maths with loop
// while will be used as n is not defined
function getSum(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++;
  }
  return sum;
}
console.log(getSum(6));
// 2. Calculate the product of all numbers from 1 to n (Factorial).
// like 7*6*5*4*3*2*1 this is how to get factorial of number
//  simple math with loop
//  use while loop as n is not defined
function getFactorial(n) {
  let i = 1;
  let multiple = 1;
  while (i <= n) {
    multiple = multiple * i;
    console.log(i);
    i++;
  }
  console.log(multiple);
  return multiple;
}
console.log(getFactorial(5));

// 3. Sum only the numbers within a range [a, b] divisible by 3 or 5.
// if number is divisible by 3||5 then print their sum
// rane could be any so 2 arguments e.g [a,b]

function getSumRange(a, b) {
  let sum = 0;
  let i = a;
  while (i <= b) {
    console.log(i);
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
    i++;
  }
  return sum;
}
console.log(getSumRange(2, 12));

// with For loop
function getSumRange2(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      console.log(sum);
    }
  }
  return sum;
}
console.log(getSumRange2(2, 12));

// 4. Count how many numbers between 1 and n are multiples of 4 but not multiples of 10.

function findMultiples(n) {
  let i = 1;
  let count = 0;
  while (i <= n) {
    if (i % 4 === 0 && i % 10 !== 0) {
      console.log(count);
      count++;
    }
    i++;
  }
  return count;
}
console.log(findMultiples(22));

// 5. Create an alternating series sum: 1 − 2 + 3 − 4 + 5 … ± n.
// loop till n series
//
function series(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum - i;
    } else {
      sum = sum + i;
    }
    console.log(sum);
  }

  return sum;
}
console.log(series(5));

