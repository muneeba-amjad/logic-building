// # Math & String Method Mastery — Practice Questions

// Goal: get Math and String methods into muscle memory so loops stop feeling blank.
// Order matters — do each section in sequence, don't skip to loops early.

// ---

// ## Part 1: Math Methods Alone (No Loops Yet)

// Just call the method, log the result. Get the syntax automatic.

// 1. Log Math.floor(7.8) and Math.ceil(7.2).
console.log(Math.floor(7.8))
console.log(Math.ceil(7.2))

// 2. Log Math.round(4.5) and Math.round(4.4).
console.log(Math.round(4.5))
console.log(Math.round(4.4))

// 3. Log Math.abs(-15).
console.log(Math.abs(-15))

// 4. Log Math.max(3, 7, 2) and Math.min(3, 7, 2).
console.log(Math.max(3,7,2))
console.log(Math.min(3,7,2))

// 5. Log Math.pow(2, 5) and the equivalent using 2 ** 5.
console.log(Math.pow(2,5))

// 6. Log Math.sqrt(81).
console.log(Math.sqrt(81))

// 7. Log Math.random() five times in a row — notice it's always between 0 and 1.
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// 8. Write an expression using Math.random() and Math.floor() to get a random integer between 1 and 10.
const random = Math.random() * 10
console.log(Math.floor(random) + 1)

// 9. Log Math.trunc(9.99) and compare it to Math.floor(9.99) — then try both with -9.99.
console.log(Math.trunc(-9.99))
console.log(Math.floor(-9.99))

// 10. Given a number 47, log whether it's even or odd using the % operator.
function evenOdd(n){
return n % 2 === 0 ? "Even" : "Odd"
}
console.log( evenOdd(47) )
console.log( evenOdd(20) )

// ## Part 2: Math Methods in a Single Loop Line

// Now use them one at a time, inside a loop, without combining logic.

// 11. Loop from 1 to 10, and inside the loop log Math.floor(i / 2) for each i.

function loop(){
    let i = 0
    while (i< 10){
        i++
         console.log(Math.floor(i / 2))
    }
    return i
}
loop()

// 12. Loop from 1 to 20, and log only the numbers where i % 5 === 0.
function loopOfTwenty(){
    let i = 1
    while (i< 20){
        if(i%5 === 0){
            console.log(i)
        }
        i++
    }
    return i
}
loopOfTwenty()

// 13. Loop 10 times, and each time log a random integer between 1 and 6 (simulate a dice roll).


// 14. Loop through the array [4.3, 7.8, 2.1, 9.9] and log the Math.round() of each value.
// 15. Loop through the array [-3, 5, -8, 2, -1] and log the Math.abs() of each value.
// 16. Loop from 1 to 10, and keep track of the largest number seen so far using Math.max() (without using Math.max on the whole array at once).
// 17. Loop from 1 to 10, and keep a running sum, then log Math.pow() of the final sum with exponent 2.
// 18. Loop through an array of prices [19.99, 5.49, 100.005] and round each to 2 decimal places using Math.round(price * 100) / 100.
// 19. Write a loop that generates 5 random numbers between 1–100 and stores them in an array.
// 20. Write a loop that finds the smallest number in an array by comparing with Math.min() one element at a time (not Math.min(...array)).

// ## Part 3: String Methods Alone (No Loops Yet)

// 21. Log the length of the string "JavaScript".
// 22. Log "Hello World" converted to uppercase and lowercase.
// 23. Log the character at index 3 of "Frontend" using charAt() and using bracket notation.
// 24. Use .slice() to get "Script" out of "JavaScript".
// 25. Use .includes() to check if "World" exists inside "Hello World".
// 26. Use .indexOf() to find where "o" first appears in "Hello World".
// 27. Use .trim() to clean up the string "   messy spacing   ".
// 28. Use .split() to turn "React,Node,CSS,HTML" into an array.
// 29. Use .replace() to change "I like cats" into "I like dogs".
// 30. Use .padStart() to turn the number 5 (as a string) into "05".

// ## Part 4: String Methods in a Single Loop Line

// 31. Loop through the string "Hamburg" character by character using a for...of loop and log each letter.
// 32. Loop through the array ["react", "node", "css"] and log each one in uppercase.
// 33. Loop through the array [" muneeba ", " ali ", " sara "] and log each name trimmed.
// 34. Loop through the array ["cat", "elephant", "dog"] and log only the words with length greater than 3.
// 35. Loop through the string "muneeba" and count how many times the letter "e" appears.
// 36. Loop through an array of full names and log only the first name of each using .split(" ")[0].
// 37. Loop through the array ["hello", "world"] and log each word with its first letter capitalized.
// 38. Loop through the string "Hamburg" and build a reversed version of it character by character.
// 39. Loop through an array of words and log only the ones that start with a vowel.
// 40. Loop through the array ["apple", "banana", "kiwi"] and log each word followed by its length, e.g. "apple (5)".

// ## Part 5: Combined Challenges (Math + String + Loop Together)

// This is the level where the "blank" feeling usually disappears — you're forced to reach for the right tool mid-loop.

// 41. Given an array of numbers, loop through and log "even" or "odd" next to each number.
// 42. Given an array of prices, loop through and log each price rounded to 2 decimals, prefixed with "$".
// 43. Given the string "javascript developer", loop through and count how many vowels it contains.
// 44. Given an array of names, loop through and log only names longer than 5 characters, in uppercase.
// 45. Generate an array of 10 random numbers between 1–100, then loop through and log only the ones above 50.
// 46. Given an array of numbers, loop through and build a new array containing only the absolute values of the negative ones.
// 47. Given the string "Hello Hamburg", loop through and log each word's length next to the word itself.
// 48. Given an array of temperatures in Celsius, loop through and log each converted to Fahrenheit, rounded to the nearest whole number.
// 49. Given an array of words, loop through and log the longest word found by comparing lengths as you go (don't sort — track manually).
// 50. Given a paragraph string, loop through split words and log how many words start with an uppercase letter.

// ---

// ## How to use this list

// - Don't jump to Part 5 until Parts 1–4 feel automatic — that's where the "blank mind" comes from, skipping the isolation practice.
// - For each question, before writing code, answer your own checklist: IN (what's coming in), OUT (what should print/return), REMEMBER (any running value), EACH STEP (what happens per iteration), END (what happens after the loop).
// - Do these without looking up syntax first. If you blank, that's the signal of which specific method needs more isolated repetition — go back to that item in Part 1 or 3 and drill it alone before returning to the loop version.