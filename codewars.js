// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
const squareDigits= (num) =>parseInt(num.toString().split('').map((number)=>Math.pow(number,2)).join(''))

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar =(str) => str.slice(1,-1)
console.log(removeChar('abcd'));