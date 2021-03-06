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




// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

const isSquare = (n) => Number.isInteger(Math.sqrt(n))
isSquare(25);


// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

const factorial = (n) => {
if(n < 0){
  return -1;
}else if(n === 0){
  return 1
}else {
  return (factorial(n-1)*n)
}
}
// factorial(0);
// console.log(factorial(1));




// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)
// Explanation:
// (50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

// maxMultiple (37,200) ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

const maxMultiple = (divisor, bound) => {
  let list = [];

  for (let i = 1; i <= bound; i++) {
    i % divisor === 0 ? list.push(i) : null;
  }
  return Math.max(...list)
}
// bound - bound%divisor was the best choice

maxMultiple(2,7);


// Task:
// Given a list of numbers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

// console.log(array.reduce((currentNumber, numberBeingAdded) => currentNumber+numberBeingAdded)%2)
const oddOrEven = (array) => array.reduce((currentNumber, numberBeingAdded) => currentNumber+numberBeingAdded,0) % 2 === 0? 'even':'odd';
oddOrEven([0,1,5]);



// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

const findSum = (number) => {
  let divisibleNumbers = [];

  for (let i = 0;  i< number; i++) {
    if( i%3 === 0){
      divisibleNumbers.push(i);
    } else if ( i%5 === 0){
      divisibleNumbers.push(i)
    }else{
      null;
    }
  }

  return number + (divisibleNumbers.reduce((a,b) => a+b, 0));
};
findSum(10);




// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

const stray = (numbers) => {
  const sortedArray = numbers.sort();

  if(sortedArray[0] !== sortedArray[1]){
    return sortedArray[0]
  }else {
    return sortedArray[sortedArray.length-1]
  }
  
}
//below is best practice(ternary operator version of my solution)
// function stray(numbers) {
//   numbers = numbers.sort();
//   return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
//   }
  
stray([17, 17, 3, 17, 17, 17, 17]);



// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

const solution =(str, ending) => str.endsWith(ending)

solution('sumo','umo');


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => {
  const vowels = 'aeiouAEIOU'
  const answer = [];
  str.split('').map((letter) => {

    if(vowels.includes(letter)){
      null;
    } else{
      answer.push(letter);
    }    
  })
  return answer.join('')
}

// below is the best answer
// str.repalce(/[aeiou]/gi, '')
disemvowel('This website is for losers LOL!')




// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// const isPangram = (string) => {
//   const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//   let doubleCheck = [];
//   const split = string.toLowerCase().split('').sort().replace(/[0-9]/g,'');
//   split.map((letter) => {
//     if( !doubleCheck.includes(letter) && letter !== ' ' && letter !== '.'){
//       doubleCheck.push(letter);
//     }
//   })

//   if( alphabet.join() === doubleCheck.join()){
//     return true;
//   }else{
//     // console.log(doubleCheck.join().replace(/[0-9]/g,''))
//     return false;
//   }
// }
// isPangram('The quick brown fox jumps over the lazy dog quick.')
// below is the best Option
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// How I crossed a mountain desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

// ["WEST"]
// or

// { "WEST" }
// or

// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
// See more examples in "Sample Tests:"
// Notes
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// if you want to translate, please ask before translating.

// MY SIMPLIFIED DIRECTIONS: give back the directions that don't cancel out each out.
// Example given is : ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]
// explanation: North and South cancel each other and east and west cancel each other. So the first two element 0 and 1 are canceled, and then element 3 and 4 are also canceled. That leaves us with north south west, but north south cancel each other leaving the answer west

// const dirReduc = (arr) => {
//   //while north is next to south and east is next to west
//   let startingPoint = arr.length 
//   // console.log(arr)
//   while(startingPoint--){
    
//     for (let i = 0, j = 1; i < arr.length; i++, j++) {
//       if( arr[i] === 'NORTH' && arr[j] === 'SOUTH' || arr[i] === 'SOUTH' && arr[j] === 'NORTH'){
//         // console.log(arr[i], arr[j])
//         // console.log(i,j)
//         arr.splice(arr[i],2);
//         // console.log(arr);
//       }else if( arr[i] === 'EAST' && arr[j] === 'WEST' || arr[i] === 'WEST' && arr[j] === 'EAST'){
//         // console.log(arr[i], arr[j])

//         arr.splice(arr[i],2);
//         // console.log(arr);
//       }
//     }
//     console.log(arr);
//   }

// }
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])


// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

// const reverseBits = (n) => {
//   const convertToBinary = parseInt(n).toString(2);
//   const reverseBinary = convertToBinary.split('').reverse().join('');
//   const convertToNumber = parseInt(reverseBinary,2)
//   return convertToNumber;
// }
// reverseBits(417)
// console.log(reverseBits(417));

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const capitalize = (s) => {
  let answer = [];
  //we will push initial paremeter into the answer array as its first index;
  //after we will have to create another variable where we split the parameter, see if the index is divisble by 2 so we can determine if the index is even or not( 0 is considered even)
  //if the index is divisble by 2 we will have to swap them for the capitalized version
  //after that just join the array back into a string and push that result into the answer array as the second index
  answer.push(s);
  const convertToCapital = () => {
    
    const turnStringIntoArray = s.split('');
    // console.log(turnStringIntoArray)
    turnStringIntoArray.map(() => {
        if (turnStringIntoArray.indexOf() % 2 === 0){
          indexOf(turnStringIntoArray).toUpperCase();
        }
        // console.log(turnStringIntoArray)
    })
  } 
  
  answer.push(convertToCapital())
  // console.log(answer)
  
  return answer;
};

capitalize("abcdef")
// console.log(capitalize());







// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// const getMiddle =(s) => {
// check the length to determine if it is the length is even or odd. 
// const check = s.length;
// console.log(check)

// if (check%2 === 0){
// }else{
// }
//if odd
  //
//if even
  //
// }
// getMiddle('testy');
// console.log(getMiddle('test'));





// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

// When a is lower than b, return -1.

// When a is higher than b, return 1.

// When a is close to b, return 0.

// If margin is not given, treat it as zero.

// Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

// Assume: margin >= 0

// Tip: Some languages have a way to make arguments optional.

// const closeCompare = (a, b, margin=0) =>{

//   if(a < b){
//     Math.abs(a-b) <= margin? 0 : -1 
//   } else if ( a > b ){
//     Math.abs(a-b) <= margin? 0 : 1 
//   } else{
//     return 0
//   }
// }
// closeCompare(4,5)
// console.log(closeCompare())


// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {

// }


//hello, name or world!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

// const hello = (name) => `hello, ${name ? (name[0].toUpperCase() + name.slice(1).toLowerCase()) : 'World'}!`


//can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

// const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0 
// console.log(isDivideBy(-12,2,-6))

//Multiply
//This code does not execute properly. Try to figure out why

// const multiply = (a, b) => a*b
// multiply()
// console.log(multiply(2,1))

//FIlling an array (part 1)

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]


// The falling speed of petals
// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0


// falling speed = 5 cm/second => 80 seconds to the ground
// 80 secondc to reach the groun
// create a function to  determine how fast based on velocity
//from the branch to the ground it is 16 cm
// const sakuraFall = (fallingSpeed) => fallingSpeed > 0 ? 400/fallingSpeed : 0;
// console.log(sakuraFall(10))


//Filing an array (part 1)

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

// const arr = () => {
//   const context = [];
//   for (let i = 0; i < 5; i++) {
//     context.push(i)
//   }
//   return context;
// }
// console.log(arr())



//Even or Odd

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => number % 2 === 0  ? 'Even' : 'Odd'; 


//Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = (arr) => {
  let startingNumber = 0
  for (let i = 0; i < arr.length; i++) {
    formula = startingNumber + arr[i];
    startingNumber = formula;
  }
  return Math.abs(startingNumber)
}
// console.log(positiveSum([1,2,3,4,5]))

//vowel counting

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

const getCount = (str) => {
  let vowelsCount = 0;
  let vowels = [];
  let split = str.split('')

  split.map((letter) => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter ==='u' ? vowels.push(letter) : null)
  
  vowelsCount = vowels.length
  
  return vowelsCount;
}


//mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letter from a - z and A - Z

// const accum = (s) => {
  //we want to split to string where each letter is separated by "-"
  //first letter is capitalized and the rest is lower case(index(1).toUpperCase())
  //based on the position is that many multiple. so first letter is A, second letter is Bb, third letter is Ccc etc
    //
  // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

// }
// accum('abcd')


//NUmbers in strings
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

  // solve=s=>Math.max(...s.match(/\d+|$/g))
  // \d+ => \d represent any digit from 0-9 and the + represents more than once
  // g is what makes the search global so it doesnt stop from the first one it finds( it loops till the end)
// solve('gh12cdy695m1');


//Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//find the length of the string and take that number and determine if its even or odd by using the remainder operator
//split the string to get an array
//if even did the length by two to get the center number in order to get the letter in the middle position
//if odd then do the same thing but add and subtract one
const getMiddle = (s) => s.length % 2 === 0 ? (s[s.length/2 - 1] + s[s.length/2]): (s[(s.length - 1)/2])
// getMiddle('testing');
// console.log(getMiddle('testing'))

//Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//split the string
//loop through the new array returning the length
//use math.min? to get the minimum


// const findShort = (s) => {
//   let split = s.split(' ')
//   const numbers = [];
//   split.map((word) => numbers.push(word.length))
//   return Math.min(...numbers);
// }

const findShort = (s) => Math.min(...s.split(' ').map((word) => word.length))
// findShort(  "bitcoin take over the world maybe who knows perhaps");
// console.log(findShort(  "bitcoin take over the world maybe who knows perhaps"))



//isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

//split into an array and turn all of the letters lowercase
// use a for loop to loop through the array and then see if the current iteration matches the next iteration


const isIsogram = (str) => {
  let answer = true;
  const split = str.toLowerCase().split('').sort();

  for (let i = 0; i < split.length-1; i++) {
    if (split[i] === split[i+1]){
      answer = false
    }
  }

  return answer;
}
// console.log(isIsogram('Dermatoglyphics'))





//Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//split the string and loop through it
//if the letter equals x push to x array and same for o
//after words join the respectvie arrays and compare the length

//This is my solution
// const XO = (str) => {
//   let x = [];
//   let o = [];

//   str.toLowerCase().split('').map((letter) => {
//     if(letter === 'x'){
//       x.push(letter);
//     }else if(letter === 'o'){
//       o.push(letter);
//     }
//   })
  
//  return x.length === o.length ?  true :  false;
// }

//This was the best solution i saw that was still practical to read
const XO = (str) => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;


// console.log(XO('xxOo'));



//Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//goal, capitalize the first letter of every word
const toJadenCase = (str) => str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// toJadenCase("How can mirrors be real if our eyes aren't real");
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))



//Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

const getSum = (a,b) => {
  //commented section was my solution
  // if ( a === b){
  //   return a;
  // }else if(a < b ) {
  //   const answer = [];

  //   for (let i = a; i < b+1; i++) {
  //     answer.push(i);
  //   }

  //   return answer.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // } else if (a > b){
  //   const answer = [];

  //   for (let i = b; i < a+1; i++) {
  //     answer.push(i);
  //   }

  //   return answer.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // }

  //this was the best solution that also made sense; apparently there's a formula for it
  let min = Math.min(a, b),
  max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;


  }
// console.log(getSum(4,1))




//Growth of a population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.



//p0 = starting population
//percent = percentage of polulation growth/yr
//aug = amount increased by people moving in
//p = desired population

//i just gott come up with a math formula
//p0 = i
//for each yr(loop) = i*(1+percent) + aug
//loop stops when the total is greater than or equal to "p"

const nbYear = (p0, percent, aug, p) => {
  let counter = 0;
  let currentPopulation = p0;

  for (let i = 1; currentPopulation <=p; i++) {
    let formula = currentPopulation + (currentPopulation*(percent/100)) + aug;
      counter = i
      currentPopulation = formula;
    }

  return counter;
}
// console.log(nbYear(1500, 5, 100, 5000))



// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// based on the position, it repeats itself three times
//the first letter of each sequence will always be capital

const accum = (s) => s.toLowerCase().split('').map((letter, i) => letter.toUpperCase().concat(letter.repeat(i))).join('-')

// accum('ZpglnRxqenU')
// console.log(accum('ZpglnRxqenU'))






//Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"


// [0,1,2,3,4,5]
const maskify = (creditCardNumber) => {
  if(creditCardNumber.length <= 4){
    return creditCardNumber;
  }else{
    const placeholder = [];
    
    creditCardNumber.split('').map((number,i) => {
      if( i < creditCardNumber.length - 4){
        number = '#';
        placeholder.push(number);
      }else{
        placeholder.push(number);
      }
    })

     return placeholder.join('');
  }
  
}

maskify('4556364607935616')
// console.log(maskify('4556364607935616'))



// Regex Validate PIN Code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// have to figure out how to get rid of spaces that can cause the length to equal 4 or 6
const validatePIN = (pin) => {
  if(pin.length === 4 || pin.length === 6){
    let check = (digit) => digit >= 0 && digit <= 9 ? true : false ;
    return pin.split('').every(check)
  } else{
    return false;
  }
}
// console.log(validatePIN('09876 '))



//Who Likes It?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

// empty array = 'no one likes this'
// one object in the array = ' `object` likes this'
//two objects inthe array '`object 1` and `object 2` like this'

//! in this case using a switch statement would've alot cleaner and it would've saved a little bit of time processsing

const likes = (names) => {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4){
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else{
    return 'no one likes this';
  }
}
// console.log(likes([]))


//longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

//lets have a variable hold the current longest palindrone. it's current value will only replaced if the new palindrone founded has a longer length
// i get how to use the split reverse and join method, but how would i know where to split or is it possible to compare it to the previous string


const longestPalindrome = (s) => {
  const getCenters = (s,c) => {
    let L = c, R = c;
    // console.log('get center start index:' + c);

    while (s[L] === s[R] <= s.length);
    // console.log('return ' + L +  ':' + (R-1));

    return [L,--R];
  }

  const expandAroundCenters = (s, left,right) => {
    let L = left, R = right;

    while ( L >= 0 && R <s.length && s[L] === s[R]){
      L--;
      R++;
    }
    // console.log('expand return' + (L + 1) + ":" + (R-1));

    return [++L, --R];
  }

  let start = 0, end = 0;

  for (let i = 0; i < s.length; i++) {
    let center = getCenters(s,i);
    let bounds = expandAroundCenters(s, center[0], center[1]);
    let L = bounds[0], R = bounds[1];

    if(R - L > end - start){
      start = L;
      end = R;
    }
    // console.log('---');
    i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center;
  }

  //it timed out for some reason, so i gotta look into this to understand the code better and edit it 

  return s.substring(start, end + 1)
}
// console.log(longestPalindrome("zzbaabcd"));



//Sum of two lowest positive integers
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumTwoSmallestNumbers = (numbers) => {  
  // below is my solution
  // const answer = [];
  // const add = (a,b) => a + b;
  // const x = numbers.sort((a,b) => a-b);
  
  // answer.push(parseInt(x[0])) && answer.push(parseInt(x[1]));x
  
  // return answer.reduce(add);

  //the better solution
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
}

// sumTwoSmallestNumbers([19, 5, 42, 2, 77])








//Password Should Not Contain Any Part of Your Username
// You are writing a password validator for a website. You want to discourage users from using their username as part of their password, or vice-versa, because it is insecure. Since it is unreasonable to simply not allow them to have any letters in common, you come up with this rule:

// For any password and username pair, the length of the longest common substring should be less than half the length of the shortest of the two.
  
// In other words, you won't allow users to have half their password repeated in their username, or half their username repeated in their password.

// Write a function validate(username, password) which returns true if your rule is followed, false otherwise.

// Assume:

// Both the username and the password may contain uppercase letters, lowercase letters, numbers, spaces, and the following special/punctation characters: !@#$%^&*()_+{}:"<>?[];',.
// The username and password will each be less than 100 characters.

//NEED TO LEARN MORE ABOUT SUBSTRINGS AND THEIR METHODS

const validate = (username, password) => {
  
}
validate("sword", "password" );