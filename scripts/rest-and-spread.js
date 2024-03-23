console.log("Rest this & spread the news!");

// ****** the REST parameter ******
// creates and array of arguments

// function sumAll(...args) {
//   // `...args` 'args' is the name of the array
//   //   console.log(args); // Array(5) [ 1, 2, 3, 4, 5 ]
//   let sum = 0;
//   for (let el of args) {
//     // console.log(el); // output each element of the `args` array
//     sum += el;
//   }
//   return sum;
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // 15

// or we can include some param's as variables and the rest into an array:

// function sumAll(a, b, ...args) {
//   let sum = a + b; // sum the variables
//   for (let el of args) {
//     sum += el; // add each el of `args` to `sum`
//   }
//   return sum;
// }
// console.log(sumAll(1, 2, 3, 4, 5)); // 15

// There is also a special array-like object named `arguments` that contains all
// arguments by their index.
// function arguments(a, b, ...args) {
//   return console.log(arguments); // no array methods available
// }
// arguments(1, 2, 3, 4, 5); // Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, … }

// function arguments(a, b, ...args) {
//   let argsArr = Array.from(arguments); // now we can use array methods `.map` etc.
//   return console.log(argsArr);
// }
// arguments(1, 2, 3, 4, 5);
// ****** the REST parameter END ******

// ****** the SPREAD parameter ******
// looks like a `...rest` but does the oposite!
// // it expands an iterable into a list of arguments:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 5, 4, 3, 2];
// console.log(Math.max(arr1)); // NaN - can't give this function call an array
// console.log(Math.max(...arr1)); // 5 - but we can spread the array into args
// // we can also pass multiple arrays like this:
// console.log(Math.max(...arr1, ...arr2)); // 6

// //  we can also use it to merge arrays
// let arr3 = ["a", "b", "c", "d", "e"];
// let arr4 = [1, 2, 3, 4, 5];

// let merged = [...arr3, ...arr4];
// console.log(merged);

// // it expands an iterable into an array, ANY iterable!
// let str = "Arsenvenga";
// let arrFromString = [...str];
// console.log(...str[1]); // 'r'
// console.log(arrFromString); // Array(10) [ "A", "r", "s", "e", "n", "v", "e", "n", "g", "a" ]

// // it's also used to make independent copies of arrays and objects

// // this spreads arr 4 into a list of arguments
// // and then pushes them to the new array `arr5`
// let arr5 = [...arr4];
// // we can modify arr4 without affecting arr5 & vice versa
// arr4[5] = 10;
// console.log(arr4); // Array(6) [ 1, 2, 3, 4, 5, 10 ]
// console.log(arr5); // Array(5) [ 1, 2, 3, 4, 5 ]

// as said, we can also use it to make copies of objects
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { ...obj1 };
// console.log(obj2); // Object { a: 1, b: 2, c: 3 }

// and merge abjects & arrays
// NOTE: the elements of an array are spread into individual elements
// let obj1 = { a: 1, b: 2, c: 3 };
// let arr = [4, 5, 6];
// let obj3 = { ...obj1, ...arr };
// console.log(obj3); // Object { 0: 4, 1: 5, 2: 6, a: 1, b: 2, c: 3 }

// ****** the SPREAD END parameter ******
