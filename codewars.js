// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
const squareDigits = (num) => parseInt(num.toString().split('').map((number) => Math.pow(number, 2)).join(''));

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar = (str) => str.slice(1, -1);

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
const sumArray = (array) => {
  if(!array) {
    return 0
  } 

  if(array.length <= 1) {
    return 0;
  }

  return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
}

