// While Loop Syntax
// while (condition) {
// code block to be executed
// }

//1. Print all numbers from 1 to 10 using a loop
// let i = 0
// while (i < 10) {
//     i++
//     console.log(i)
// }

// 2. Print numbers from 10 down to 1 in reverse order.
//  let j = 10
//  while (j > 0) {
//      console.log(j)
//     j--
//  }

// 3. Print all even numbers between 1 and 100.
// let even = 0
// while ( even < 100) {
//     if (even% 2 === 0){
//     console.log(even)
//     }
//     even++
// }

// 4. Print all odd numbers between 1 and 100.
// let odd = 0
// while (odd < 100) {
//     if (odd%2 !== 0){
//         console.log(odd)
//     }
//     odd++
// }

// 5. Print the multiplication table of a given number from n × 1 to n × 10.
// function printTable(table){
//     let num = 0
//     while (num<10) {
//         num++
//         let sum = table * num
//         console.log(sum)
//     }
//     return
// }
// printTable(7)

// 6. Calculate and print the sum of the first n natural numbers.
// function naturalNumSum(n) {
//   let i = 1;
//   let sum = 0;
//   while (i <= n) {
//     sum = sum + i;
//     i++
//   }
//    console.log(sum);
// }
// naturalNumSum(15);

// 7. Calculate the sum of all even numbers from 1 up to n.

// function sumEvenNum(n) {
//   let sum = 0;
//   let i = 1;
//   while (i <= n) {
//     if (i % 2 === 0) {
//       sum = sum + i;
//     }
//     i++;
//   }
//   return sum;
// }
// console.log(sumEvenNum(26));
// 8. Calculate the sum of all odd numbers from 1 up to n.

// function sumOddNum(n){
//   let i=1
//   let sum=0
//   while(i<= n){
//     if (i%2 !==0){
//       sum = sum + i
//     }
//     i++
//   }
//    return sum
// }
// console.log(sumOddNum(7))

// 9. Calculate and print the factorial of a given number.

// IN: any number to get factorial
// OUT: a single number factoral output
// REMEMBER (accumulator/starting value):
// yes running a loop to reach the factorail number and store value
// the factorial initialized to one as zero initialization will return into zero output number
// EACH STEP: loop iterates to the value suppose 7 and multiply the amount
// below it on each step like  until the i is approached greater then Zero
// like 7*6*5*4*3*2*1 this is how to get fac torial of number
// END: in end the factorail will be returned

// --- pseudocode ---
// start i at 1
// factorial = 1
// i<=n
// factorial = factorial * i
// increase i by 1, i++
// return factorial

function getFactorial(n) {
  let i = 1;
  let factorial = 1;
  while (i <= n) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}
console.log(getFactorial(5))

// 10. Find and print the product of all digits of a given number. 345 (because 3 * 4 * 5 = 60)

function getProduct(n) {
  n = Math.abs(n); // this will not take negative number
  if (n === 0) return 0;
  let product = 1;
  while (n > 0) {
    let lastdigit = n % 10; // modlous gives last digit
    product = product * lastdigit;
    n = Math.trunc(n / 10);
  }
  return product;
}
console.log(getProduct(345));

// 11. Count and print the total number of digits in a given number.

function count(n) {
  n = Math.abs(n);
  if (n === 0) return 1;
  let digitCount = 0;
  while (n > 0) {
    n = Math.trunc(n / 10);
    digitCount = digitCount + 1;
  }
  return digitCount;
}
console.log(count(433567));

// 12. Reverse the given number and print the reversed value.
function reverseNum(n) {
  n = Math.abs(n);
  if (n === 0) return 1;
  let reverse = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    reverse = reverse * 10 + lastdigit;
    n = Math.trunc(n / 10);
  }
  return reverse;
}
console.log(reverseNum(56748));

// 13. Check whether the given number is a palindrome (reads left & right same).

function isPalindrom(n) {
  if (n < 0) return false;

  let orignalNum = n;
  let reverse = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    reverse = reverse * 10 + lastdigit;
    n = Math.trunc(n / 10);
  }
  return orignalNum === reverse;
}
console.log(isPalindrom(121));

// 14. Find and print the sum of digits of the given number.
function getSum(n) {
  let sum = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    sum = sum + lastdigit;
    n = Math.trunc(n / 10);
  }
  return sum;
}
console.log(getSum(345));

// 15. Check whether the given number is an Armstrong number.
// find the total digits first e.g 3
// sperate each digit and multiply it with rais to power e.g 3
// 153, 1^3+ 5^3+ 3^3 = 1+125+27=153

function getArmstrong(n) {
  let orignalnumber = n
  let numberofCount = n;
  let power = 0
  while (numberofCount > 0) {
    numberofCount = Math.trunc(numberofCount / 10);
    power++
  }
  let sum = 0
  let numofSum = n
  while(numofSum>0){
      let getdigit =numofSum%10
      sum = sum + Math.pow(getdigit,power)
      numofSum = Math.trunc(numofSum/10)
  }
  console.log(power)
  return sum===orignalnumber;
}
console.log(getArmstrong(153));

// 16. Check whether the given number is a Perfect number.
// a positive integer that is exactly equal to sum of its proper divisors
// 6 => 1,2,3 are divisors and 1+2+3 = 6, so 6 is perfect number 

function getPerfectNum(n){
  let i = 1
  let divisorSum = 0
  let sum=0
  while(i<n){
    if (n%i === 0){
      console.log(i)
      divisorSum= divisorSum+ i
     console.log(divisorSum)
    }
    i++
  }
return divisorSum === n
}
console.log(getPerfectNum(28))
// 17. Print all prime numbers between 1 and 100.


// 18. Check whether the given number is a prime number.
// 19. Print the Fibonacci series up to n terms.
// 20. Find and print the sum of the Fibonacci series up to n terms.
// 21. Print the square of each number from 1 to n.
// 22. Print the cube of each number from 1 to n.
// 23. Print all numbers between a and b that are divisible by 7.
// 24. Print all factors of the given number.
// 25. Find the sum of all factors of the given number.
// 26. Find HCF of two numbers.
// 27. Find LCM of two numbers.
// 28. Find the smallest digit in a number.
// 29. Find the largest digit in a number.
// -------Additional Practice----------
// 30. Count frequency of each digit in a number.
// 31. Check if a number is a Strong number.
// 32. Find GCD using the Euclidean method.
// 33. Check if a number is a Harshad number.
