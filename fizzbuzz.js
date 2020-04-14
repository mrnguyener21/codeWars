// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// loop through 1-100
//if it can be divided by 3 replace it with the word fizz
//if it can be divided by 5 replace it with the word buzz
//if it can be divided by 3 & 5 replace it with fizz buzz

// 1 
// 2 
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// fizzbuzz

//i need to print out the divisible number without mutating it.......
// you need to print out the number / word (buzz, fizz)

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// [ a, b, c]

// 1


// if negative number sort a lower than b
// if positive number sort b lower than a
// if 0 leave unchanged



const cars = [ { name: 'ferrari', id: 5, price: 200},  {name: 'bmw', id: 2, price: 5000}, { name: 'honda', id: 3, price: 5}]

arr.sort((a, b) => a - b); // sorts in ascending order

// sort by price most expensive first