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
function naturalNumSum(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum = sum + i;
    i++
  }
   console.log(sum);
}
naturalNumSum(15);

// 7. Calculate the sum of all even numbers from 1 up to n.
// 8. Calculate the sum of all odd numbers from 1 up to n.
// 9. Calculate and print the factorial of a given number.
// 10. Find and print the product of all digits of a given number.
// 11. Count and print the total number of digits in a given number.
// 12. Reverse the given number and print the reversed value.
// 13. Check whether the given number is a palindrome.
// 14. Find and print the sum of digits of the given number.
// 15. Check whether the given number is an Armstrong number.
// 16. Check whether the given number is a Perfect number.
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