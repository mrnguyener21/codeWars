// // Welcome. In this kata, you are asked to square every digit of a number.
// // For example, if we run 9119 through the function, 811181 will come out,
// // because 92 is 81 and 12 is 1.
// // Note: The function accepts an integer and returns an integer
// const squareDigits = (num) => parseInt(num.toString().split('').map((number) => Math.pow(number, 2)).join(''));


// // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// const removeChar = (str) => str.slice(1, -1);


// // Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// // (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
// // Example:
// // { 6, 2, 1, 8, 10 } => 16
// // { 1, 1, 11, 2, 3 } => 6
// // If array is empty, null or None, or if only 1 Element exists, return 0.
// // Note:In C++ instead null an empty vector is used. In C there is no null. ;-)
// const sumArray = (array) => {
//   if(!array) {
//     return 0
//   } 

//   if(array.length <= 1) {
//     return 0;
//   }

//   return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
// }


// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// // For example,
// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]
// // The correct answer would be 17.
// // Hint: Don't forget to check for bad values like null/undefined

// //true = present, false null undefined etc = not present
// //check each index of an array for value of true

// // const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter(Boolean).length; better solution created by another user
// const countSheeps = (arrayOfSheep) => {
//   let counter = 0;
//   arrayOfSheep.map((sheep) => {sheep === true? counter ++:counter+0})
//   return counter;
// }


// // In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// // The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// // Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// // You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// // The string has a length greater or equal to one and contains only letters from ato z.
// // #Examples:
// // s="aaabbbbhaijjjm"
// // error_printer(s) => "0/14"
// // s="aaaxbbbbyyhwawiwjjjwwm"
// // error_printer(s) => "8/22"

// // const printerError =(s) => s.match(/[^a-m]/g).length + "/" + s.length;best practice solution from another person. Don't understand the parameters he used for match.

// const printerError = (s) => {
//   const correctArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
//   let error = 0;
//   s.split('').map((letter) => {correctArray.includes(letter)? error +0:error ++})
//   return `${error}/${s.length}`
// }

// // Given: an array containing hashes of names
// // Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// // Example:
// // list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // // returns 'Bart, Lisa & Maggie'
// // list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // // returns 'Bart & Lisa'
// // list([ {name: 'Bart'} ])
// // // returns 'Bart'
// // list([])
// // // returns ''

// [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]

// const list = (people) => people.map(({ name }) => name).join(', ').replace(/,([^,]*)$/, ' &' + '$1');

// // const list = (people) => {
// //   let stringOfNames = people.map(({ name }) => name).join(', ');

// //   const position = stringOfNames.lastIndexOf(',');

// //   stringOfNames = stringOfNames.substring(0, position) + ' &' + stringOfNames.substring(position + 1);
  
// //   return stringOfNames;





// // Complete the square sum function so that it squares each number passed into it and then sums the results together.
// // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// const squareSum = (numbers) => numbers.map((number) => Math.pow(number,2)).reduce((a,b) => a+b,0)


// // Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// // Examples:
// // Input: 21445 Output: 54421
// // Input: 145263 Output: 654321
// // Input: 123456789 Output: 987654321

// const descendingOrder = (n) => parseInt(n.toString().split('').sort().reverse().join(''));

// // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA str
// // DNAStrand ("ATTGC") // return "TAACG"
// // DNAStrand ("GTAT") // return "CATA" 
// const DNAStrand = (dna) => {
//   return dna.split('').map((symbol)=> {
//     if (symbol === 'A'){
//       return 'T'
//     }else if(symbol === 'T'){
//       return 'A'
//     }else if(symbol === 'C'){
//       return "G"
//     }else if(symbol === 'G'){
//       return "C"
//     }
//   }).join('');
  
// }


// // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// // invert([]) == []
// const invert = (array) => array.map((number) => Math.sign(number) === 1? -Math.abs(number):Math.abs(number))
// // const invert =(array) => array.map((x) => x === 0? x:-x) BEST SOLUTION BUT DON'T UNDERSTAND THE 0


// // Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// // Task
// // Write a function that returns both the minimum and maximum number of the given list/array.
// // Examples
// // minMax([1,2,3,4,5])   == [1,5]
// // minMax([2334454,5])   == [5, 2334454]
// // minMax([1])           == [1, 1]
// // Remarks
// // All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
// const minMax =(arr) => [Math.min(...arr),Math.max(...arr)]


// // Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// // a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// // The four operators are "add", "subtract", "divide", "multiply".
// // A few examples:
// // arithmetic(5, 2, "add")      => returns 7
// // arithmetic(5, 2, "subtract") => returns 3
// // arithmetic(5, 2, "multiply") => returns 10
// // arithmetic(5, 2, "divide")   => returns 2.5
// // ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
// // ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
// // ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
// // ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
// // Try to do it without using if statements!
// const arithmetic = (a,b, operator) => operator === 'subtract'? a-b:operator === 'add'?a+b:operator === 'multiply'? a*b:a/b;



// // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// // Example
// // filter_list([1,2,'a','b']) == [1,2]
// // filter_list([1,'a','b',0,15]) == [1,0,15]
// // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// const filter_list=(l) => l.filter((x)=> typeof x === 'number') 


// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  fals

//enterdcode has to match correct code
//currentdate has to be equal to or less than expiration date

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)? true:false;

checkCoupon('123a','123','September 5, 2014','October 1, 2014');

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

const number = (array) => array.map((v, i) => `${i + 1}: ${v}`)
number(['a','b','c'])
// console.log(number(['a','b','c']))


// let x = array.map((letter) => alphabet.indexOf(letter)); 
// console.log(x) RETURNED [0,1,2]


// let x =''
//   array.map((letter)=> x = alphabet.indexOf(letter))
  // console.log(x) RETURNED 2

  // const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //   const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,,15,16,17,18,18,20,21,22,23,24,25,26];
  //   let answer = []
  //   let x =''
  
  //   for (let i = 0; i < array.length; i++){
  //     x = alphabet.indexOf(array[i]);
  //     console.log(x)//return 0 1 2 
  //     answer.push( `${numbers[x]}: ${alphabet[x]}`);
  //   }
  //   return answer;
  
//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

const highAndLow = (numbers) => {
  const sortedArray = numbers.split(' ').sort((a,b) => a-b);
  if(sortedArray.length > 1){
    return `${sortedArray.pop()} ${sortedArray.shift()}`  
  }else{
    const singleValue = sortedArray.pop()
    return`${singleValue} ${singleValue}`
  }
}
// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
// console.log(highAndLow("42"))
// BELOW IS THE BEST PRACTICE
// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }


// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

const minValue = (values) => parseInt(values.filter((a,b) =>  values.indexOf(a) === b).sort().join(''))

minValue([4,7,5,7])
// console.log(minValue([4,7,5,7]))

// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
const roundToNext5 = (n) => Math.ceil(n/5)*5;




// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8


//create a formula that adds a row of odd numbers. that row contains that many numbers, so if n = 6 then that means there should be six odd numbers being added
//the rows are in order
//first figure how to get the starting number of each row
//second take the starting number and add 2 to it for the next number until the amount of numbers matches n
//third add it all together

const rowSumOddNumbers = (n) => Math.pow(n,3)
rowSumOddNumbers(4)





// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// const isAnagram = (test, original) => {
// const testWord = test.toLowerCase().split('').sort().join('')
// console.log(testWord)
// const originalWord = original.toLowerCase().split('').sort().join('');
// console.log(originalWord)
// return testWord === originalWord? true : false;
// }

const isAnagram = (test,original) => test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('') ? true : false ;

isAnagram("Twoo", "WooT");


// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30




function getDivisorsCnt(n) {
  for (var divisble = 0, i = n; i > 0; i--) {
    if (n % i == 0) divisble++;
  }
  
  return divisble;
}
getDivisorsCnt(54);

