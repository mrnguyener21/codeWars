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


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

//true = present, false null undefined etc = not present
//check each index of an array for value of true

// const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length; better solution created by another user
const countSheeps = (arrayOfSheep) => {
  let counter = 0;
  arrayOfSheep.map((sheep) => {sheep === true? counter ++:counter+0})
  return counter;
}


// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.
// #Examples:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

// const printerError =(s) => s.match(/[^a-m]/g).length + "/" + s.length;best practice solution from another person. Don't understand the parameters he used for match.

const printerError = (s) => {
  const correctArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
  let error = 0;
  s.split('').map((letter) => {correctArray.includes(letter)? error +0:error ++})
  return `${error}/${s.length}`
}

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''

[ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

const list = (people) => people.map(({ name }) => name).join(', ').replace(/,([^,]*)$/, ' &' + '$1');

const list = (people) => {
  let stringOfNames = people.map(({ name }) => name).join(', ');

  const position = stringOfNames.lastIndexOf(',');

  stringOfNames = stringOfNames.substring(0, position) + ' &' + stringOfNames.substring(position + 1);
  
  return stringOfNames;
}

console.log(list([{name:'victor'},{name:'betty'},{name:'athena'},{name:'vernon'}]))

// write a function  that will accept a jumbled word and a dictionary 
// and will output a word someone might have said

// 1.
// word = sprots
// dictionary = [ sports, ports, ocean, soccer ]
// output = sports 

// word = sprots
// dictionary = [ sports, ports, ocean, soccer, portss ]
// output = [ sports, portss ]

// const wordMatch = (jumbledWord, dictionary) => {
  //first split the word into individual letter
  //second check to see if any of the elements in the dictionary parameter contains all of the individual letters
    //loop through the dictionary parameter
    //does that parameter include('splitString')
    //issue: what if it returns two answers for examples sprots can return two words that can come from sprots

//   const splitWord= jumbledWord.split('');

//   dictionary.map((word) => {
//     if(word.length === jumbledWord.length) {
//       // do logic
//       word.includes(splitString)
//   }
// }

// wordMatch('sports', [ 'sports', 'ports', 'ocean', 'soccer' ]);
