// console.log("Test this....");

// let firstName = "";
// let lastName = "";
// let knickName = "Borris the Animal";
// alert(firstName || lastName || knickName || "Anonymous"); // "Borris the Animal"

// knickName = "";
// alert(firstName || lastName || knickName || "Anonymous"); // Anonymous

// alert(1 && 2 && null && 3); // null

// alert(1 && 2 && 3); // 3, the last one

// if (1 && 2 && 3) {
//   alert("All truthy");
// }

// alert(alert(1) || 2 || alert(3)); // alert "1" then "2"
// alert(alert(1) && alert(2)); // alert "1" then "undefined"
// alert(null || (2 && 3) || 4); // alert "3"

// let age = 50;
// if (age >= 14 && age <= 90) {
//   alert("Age OK: " + age);
// } else {
//   alert("Out of range: " + age);
// }

// if (!(age >= 14) && !(age <= 90)) {
//   alert("Age OK: " + age);
// } else {
//   alert("Out of range: " + age);
// }

// if (age < 14 || age > 90) {
//   alert("Age out of range: " + age);
// } else {
//   alert("Age OK this time: " + age);
// }

// ****** Crude admin login START ******\\
// const pwd = "pwd";

// function wrongPwd() {
//   alert("Wrong password");
//   alert("This M/c will now explode...");
//   alert("Big bada BOOOM!!!");
// }

// function cancelled() {
//   alert("Cancelled you complete *!^$");
// }

// function notAdmin(user) {
//   alert("I don't know you " + user);
// }

// function login() {
//   let user = prompt("Who's there?");

//   if (user === "Admin") {
//     let pass = prompt("Password please...");

//     if (pass === pwd) {
//       alert("Welcome Administrator");
//     } else if (pass === "" || pass === null) {
//       cancelled();
//     } else if (pass !== pwd) {
//       wrongPwd();
//     }
//   } else if (user === null || user === "") {
//     cancelled();
//   } else if (user !== "Admin") {
//     notAdmin(user);
//   }

//   return "Done";
// }

// login();
// ****** Crude admin login END ******\\

// ******  Loops START ******\\

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) console.log(i); // 0,2,4,6,8,10
// }

// let i = 0;
// while (i <= 10) {
//   if (i % 2 == 0) console.log(i); // 0,2,4,6,8,10
//   i++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// let val;
// do {
//   val = prompt("input a number");
//   if (val > 100 || val === null) break;
// } while (val <= 100);

// ******  Loops END ******\\

// ******  function shit START ******\\

// function checkAge(age) {
//   age >= 18 ? console.log(true) : console.log("Did your folks allow you?");
// }
// checkAge(12);

// function checkAge2(age, parentalAgreement) {
//   return age >= 18 || console.log(parentalAgreement);
// }
// checkAge2(18, false);

//  get min val
// function min(a, b) {
//   console.log(a < b ? a : b);
//   return a < b ? a : b;
// }
// min(4, 10);

// get val from user
// @return positive integer greater than zero
function getPosIntVal() {
  // get a `Number`
  let val = Number(prompt("enter a whole number greater than Zero"));

  // Check val
  return Number.isInteger(val) && val > 0
    ? val
    : alert("number not supported. Try again!");
}

// @return raise `num` to integer power `radix`
function pow() {
  let radix;
  const num = getPosIntVal(); // prompt for user input

  // check we got a number back from `getPosIntVal()`
  if (!num) return console.log("ERROR: No number to multiply");
  radix = getPosIntVal();

  // Check we got a `Number` for the radix
  if (!radix) return alert("No radix to multiply the number by <|3¬/");

  return alert(`${num}^${radix} = ${num ** radix}`);
}

// ******  function shit END ******\\

// ******  objects shit START ******\\

// ******
// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert( user[key] ); // John (if enter "name")
// ******

// ******
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple); // 5 if fruit="apple"
// ******

// ******
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let arse in user) {
//   // keys
//   alert(arse); // name, age, isAdmin
//   // values for the keys
//   alert(user[arse]); // John, 30, true
// }

// const user = {};
// user.name = "john";
// user.surname = "Smith";
// user.name = "pete";
// delete user.name;

// console.log(user);
// ******

// ******
// let schedule = {};

// // schedule["08:30"] = "get up";
// // schedule["08:35"] = "shit, shower, shave";

// isEmpty(schedule);

// function isEmpty(obj) {
//   // NOTE: loop will only start if `obj` is not empty
//   for (let key in obj) {
//     console.log(false, obj);
//     return false;
//   }
//   console.log(true, obj);
//   return true;
// }
// ******

// ******
// sum salaries
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (key in salaries) {
//   console.log(salaries[key]);
//   sum += salaries[key];
// }
// console.log(sum);

// // before the call
// // sum numeric values
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   depth: 250,
// };

// function multiplyNumeric(obj) {
//   for (let val in obj) {
//     // if typeof `is a number` it returns the string 'number'
//     // so check loosely if `val == "number"`
//     typeof obj[val] == "number"
//       ? (obj[val] *= 2)
//       : console.log(obj[val], "can't do it!");
//   }
//   console.log(menu);
// }

// multiplyNumeric(menu);
// ******

// ******
let calculator = {
  sum() {
    alert(this.a + this.b); // just for testing
    return this.a + this.b;
  },

  mul() {
    alert(`${this.a} * ${this.b} = ${this.a * this.b}`); // just for testing
    return this.a * this.b;
  },

  read() {
    this.a = +prompt("Enter val 'a':");
    this.b = +prompt("Enter val 'b'");
  },
};

// calculator.read();
// calculator.sum();
// calculator.mul();
// ******

// ******
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // shows the current step
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().showStep(); // 2
// ladder.up().up().showStep().up().up().showStep(); // 4 then 6
// ladder.down().showStep(); // 5
// // ******

// ******
// ******  objects shit END ******\\

// ******  Numbers START ******\\
// ******
// function getTwoNums() {
//   const a = +prompt("a?", "");
//   const b = parseFloat(prompt("b?", ""));

//   return {
//     a,
//     b,
//   };
// }

// function sum(func) {
//   let tot = 0;
//   for (let i in func) {
//     tot += func[i];
//   }
//   alert(tot);
//   return tot;
// }

// console.log(sum(getTwoNums()));
// ******
// ******  Numbers END ******\\

// ******  Arrays START ******\\
// ******
// `filter()`:
// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// // if `true` push result to array
// let someUSers = users.filter((user) => {
//   console.log(user.id != 2);
//   return user.id !== 2;
// });
// console.log(someUSers);

// `map()`
const folks = ["Bilbo", "Gandalf", "Nazgul"];
// `map()` calls the function for  each element in the array
// transform each element into its length
let lengths = folks.map((entry) => {
  console.log(entry);
  return entry.length;
});
console.log(lengths);

// `sort()` sorts an array in place
// however, each item is compared as a string so "2" > "23"
// thus we need to pass sort a comparison function to do the job properly
// a comparison function is only required to return a positive number to say “greater” and a negative number to say “less”.
let nums = [1, 2, 35, 12, 23, 75, 4];
// function to pass to `sort()`
function compare(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}
nums.sort(compare);
console.log(nums);

// The strings comparison compares letters by their codes by default.

let countries = ["Österreich", "Andorra", "Vietnam"];

countries.sort((a, b) => {
  return a > b ? 1 : -1; // Andorra, Vietnam, Österreich (wrong)
});
console.log(countries);

// Use `localcompare()` to sort strings correctly
countries.sort((a, b) => {
  return a.localeCompare(b); // Andorra, Österreich, Vietnam (correct!)
});
console.log(countries);

// `reduce()` is used to calculate a single value based on an array:

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );
// The function is applied to all array elements one after another and “carries on” its result to the next call.

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// e.g. to get the sum of an array
let numsToSum = [1, 2, 3, 4, 5];
let initialVal = 0;

let resultSum = numsToSum.reduce((sum, current) => {
  console.log(`sum: ${sum} current: ${current}`);
  return sum + current;
}, initialVal);
console.log(resultSum);

// same as above, just shorter
resultSum = numsToSum.reduce((sum, current) => sum + current, initialVal);
console.log(resultSum);

// arr.fill(value, start, end) – fills the array with repeating value from index start to end.

// arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

// arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

// using `map()`
// the basic syntax:
// const arr = [
//   /* array to be mapped over */
// ];
// let newArray = arr.map(function (currentValue, index, array) {
//   // return element for newArray
// }, thisArg);
// `arr` array to be mapped over
// function - callback function to execute on each item of the array.
//  `currentValue` - current element being processed.
// `index` (optional) index of the `currentValue`
// `array` (optional) - the array map was called on
// `thisArg` - the value to use as `this` when executing `callback`

// iterate over the array & square each number:
const numbers = [1, 2, 3, 4, 5, 6];

let squared = numbers.map(function (curr, index) {
  console.log(curr, index, curr ** 2);
  return curr ** 2;
});
console.log(squared);

// iterate over objects:
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 32 },
];
console.log(
  users.map(function (user, index) {
    return [user.name, index];
  })
);

// chain `map` with other array methods:
// square even numbers
const squaredEven = numbers
  .filter(function (val, index) {
    console.log("filtering!", val % 2 === 0, index);
    return [val % 2 === 0];
  })
  .map(function (num, index) {
    console.log("mapping", num ** 2, index);
    return [num ** 2, index];
  });
console.log(squaredEven);

// `map` can handle `async` operations:
const urls = ["nuttyskitchen.co.uk", "google.com", "stripe.com", "index.html"];

// const fetchData = async function () {
//   const responses = await Promise.all(
//     urls.map(async function (url, index) {
//       const response = await fetch(url);
//       return response.json();
//     })
//   );
//   console.log(responses);
// };
// fetchData();

// the short version of the above:
const fetchData = async () => {
  const responses = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response;
    })
  );
  console.log(responses);
};
fetchData();

// map each student to their first and last names:
const students = [
  { firstName: "John", lastName: "Doe", age: 17 },
  { firstName: "Stephen", lastName: "Matt", age: 16 },
  { firstName: "Abigail", lastName: "Susu", age: 15 },
  { firstName: "Borris", lastName: "The Animal", age: 15 },
];
let studentsNames = students.map((student, index) => {
  return `${student.firstName} ${student.lastName}`;
});
console.log(studentsNames);

// one of the really commmon use cases for `map` is to wrap data in html:
const container = document.getElementById("container");

let singleStudent = students.map((student, index) => {
  const fullName = student.firstName + " " + student.lastName;
  return `<h3 class="name">Name: ${fullName}</h3>
  <p class="age">Age: ${student.age}</p>`;
});
container.innerHTML += singleStudent;

// using `map` with `filter` another example
// `filter` first so we aren't processing unused data
const mathStudents = [
  {
    name: "Jane",
    score: 60,
    enrollmentYear: 2019,
  },
  {
    name: "Emmy",
    score: 40,
    enrollmentYear: 2020,
  },
  {
    name: "John",
    score: 43,
    enrollmentYear: 2019,
  },
  {
    name: "Linda",
    score: 20,
    enrollmentYear: 2019,
  },
  {
    name: "Janey",
    score: 60,
    enrollmentYear: 2019,
  },
  {
    name: "Emmyly",
    score: 40,
    enrollmentYear: 2019,
  },
  {
    name: "Johny",
    score: 43,
    enrollmentYear: 2020,
  },
  {
    name: "Lindar",
    score: 20,
    enrollmentYear: 2020,
  },
];

// get math students enrolled in 2019:
const enrolled2019 = mathStudents
  .filter((student, index) => {
    return student.enrollmentYear < 2020;
  }) // map 2019 students to `passing` or `failing`
  .map((student, index) => {
    let achievement = student.score >= 40 ? "passing" : "failing";
    return `<h3>Name: ${student.name}</h3>
  <p>Score: ${achievement}</p>`;
  });
container.innerHTML += enrolled2019;

// using `map` on objects:
const scores = { math: 50, English: 70, Physics: 45, Agriculture: 60 };
// get the `entries` from the object first with `Object.entries`
// then `map` the scores
const newScore = Object.entries(scores).map((score, index) => {
  console.log(score); // ["subject", value]

  // write directly to the page to avoid commas - see below
  // however, this is called an `anti-pattern` because we are NOT using
  // the resultant array produced by `map`. consider using `foreach` `forof`
  // if you have no use for the new array produced by `map`
  return (container.innerHTML += `<h3>${score[0]}: ${score[1]}</h3>`);
});
// console.log(newScore);
container.innerHTML += newScore; // adds array content to GUI with commas!

// ****** TASKS ****** \\
// using `split` with `map`
function camelize(str) {
  let splitStrArr = str
    .split("-")
    .map(function (word, index) {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");

  return splitStrArr;
}
console.log(camelize("camelcase-this-word"));

// look for elements with values higher or equal to a and lower or equal to b
// and return a result as a new array.

let arrToSort = [7, 4, 5, 3, 8, 1, 9, 2, 15];

let filtered = filterRange(arrToSort, 1, 4);

console.log(filtered);

function filterRange(arr, a, b) {
  // let filtered = []; // don't need this
  // arr.filter((val, index, arr) => {
  //   // // console.log(val >= a && val <= b);
  //   // val >= a && val <= b ? filtered.push(val) : null; // don't `push`
  // });
  return arr.filter(function (val) {
    // return val >= a && val <= b ? val : null; // no need to do this:
    return val >= a && val <= b;
  });
}

// Remove values from original `arr` that are outside of the range:
// filterRangeInPlace(arrToSort, 1, 4);
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      console.log(i);
    }
  }
}
console.log("arrToSort:", arrToSort); // array has been modified!

// sort in decreasing order
arrToSort.sort((a, b) => b - a);
console.log(arrToSort);

// function to return a copy of a sorted array:
function copyAndSort(arr) {
  return arr.slice(0).sort();
}
let arrOfStrings = ["HTML", "JavaScript", "CSS"];
console.log(copyAndSort(arrOfStrings));

// Map to Objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john, pete, mary];
// console.log(users1);

function mapUsers(arr) {
  return arr.map((user) => {
    return { fullName: `${user.name} ${user.surname}`, id: user.id };
  });
  // console.log(usersMapped);
}
let mappedUsers = mapUsers(users1);
console.log(mappedUsers);
// ******
// ******  Arrays END ******\\

// ******  Iterables START ******\\

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (item of range) {
  console.log(item);
}

// ******  Iterables END ******\\

// ******  Maps START ******\\
// A `Map` has key-value pairs, similar to an object, except that a `Map`
// can have keys of any data type, not just strings.
// The key type is retained & NOT converted to a string.
// map[key] = "some val" is not the right way to use `Map`
// use the `Map` methods instead: map.set()` `map.get()`etc.

const myMap = new Map();

myMap.set("1", "str"); // a string key
/*
  Map { 1 → "str" }
    size: 1
    <entries>
      0: 1 → "str"
*/
myMap.set(1, "num"); // a numeric key

/*
  Map { 1 → "str", 1 → "num" }
    size: 2
    <entries>
      0: 1 → "str"
      1: 1 → "num"
*/
myMap.set(true, "bool"); // a boolean key
/*
  Map(3) { 1 → "str", 1 → "num", true → "bool" }
    size: 3
    <entries>
      0: 1 → "str"
        <key>: "1"
        <value>: "str"
      1: 1 → "num"
        <key>: 1
        <value>: "num"
      2: true → "bool"
        <key>: true
        <value>: "bool"
*/
console.log(myMap);

// **** the `Map` can also use objects as `keys`: ****
// which we can't use with ordinary `Objects`
//  Take a user object `johnny`:
const johnny = { name: "johnny" };
// store the visit count for every user:
const visitCount = new Map();
visitCount.set(johnny, 123); // set the object `johnny` as the key with `123` as its value
/*
  Map { {…} → 123 }
    size: 1
    <entries>
      0: Object { name: "johnny" } → 123
        <key>: Object { name: "johnny" }
        <value>: 123
*/

console.log(visitCount.get(johnny)); // → 123

// Every `map.set()` call returns the `map` itself, so we can chain the calls:
myMap.set("1", "1").set(1, 1).set(true, "bool");

// **** Looping over `Maps`
// when a `Map` is created we can pass an array of `key` / `value` pairs
// to initialize it:
const recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log("get cucumber:", recipeMap.get("cucumber")); // 500

// iterate over `keys`:
// there are 3 methods for looping over `Maps`
// `map.keys()`, `map.values()`, map.entries()`
for (let veg of recipeMap.keys()) {
  console.log("keys:", veg);
}

// iterate over `values`:
for (let value of recipeMap.keys()) {
  console.log("values", value);
}

// iterate over `entries`:
for (let entry of recipeMap.entries()) {
  console.log("entries", entry);
}

// **** 'Map` preserves the order in which 'keys' were inserted
// `Map` also has a built-in `forEach` method, similar to `Array`
recipeMap.forEach((value, key, map) => {
  console.log(`key: ${key}, value: ${value}`);
});

// create a `Map` from an object using `Object.entries()`:
const johnObj = { name: "john", age: 34 };
const johnMap = new Map(Object.entries(johnObj));

console.log("johnMap.get('name'):", johnMap.get("name")); // john

console.log("johnMap:", johnMap);
/*
  Map { name → "john", age → 34 }
    size: 2
    <entries>
      0: name → "john"
      1: age → 34
*/

// Create an `Object` from `Map`
const food = new Map([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);
// use `Object.fromEntries` to create an `Object` from a map
// could be used when a third party requires an object to work with
const objFromMap = Object.fromEntries(food.entries()); // can omit `entries()` if you like
console.log("`Object` from `Map` `objFromMap`:", objFromMap); // `Object` from `Map` `objFromMap`: Object { banana: 1, orange: 2, meat: 4 }

// ******  Maps END ******\\

// ******  Sets START ******\\
// A `Set` is a special type collection - sets of `values` without `keys`
// Each value may occur only once
// useful for storing visitor info for example, without duplicates being added
// upon a second / third visit etc.
const visitorsSet = new Set();
console.log("visitorSet:", visitorsSet); // Set []
/*
  visitorSet: 
    Set []
    size: 0
    <entries>
*/

const johnForSet = { name: "john" };
const maryForSet = { name: "mary" };
const peteForSet = { name: "pete" };

// some users visit multiple times:
visitorsSet.add(johnForSet);
visitorsSet.add(maryForSet);
visitorsSet.add(peteForSet);
visitorsSet.add(johnForSet); // has no effect because value `johnForSet` exists already
visitorsSet.add(maryForSet); // has no effect because value `maryForSet` exists already

console.log("visitorSet:", visitorsSet);
/*
  visitorSet: 
    Set(3) [ {…}, {…}, {…} ]
      size: 3
      <entries>
        0: Object { name: "john" }
        1: Object { name: "mary" }
        2: Object { name: "pete" }
*/

// Iterations over a `Set`
// We can use `for...of` or `forEach` to loop over a `Set`:
for (let value of visitorsSet) {
  console.log("`for...of` value:", value);
}
/*
  value: Object { name: "john" }
  value: Object { name: "mary" }
  value: Object { name: "pete" }
*/

// and `forEach`:,
visitorsSet.forEach((value, valueAgain, set) => {
  console.log("`forEach` value:", value);
});

// can also use `set.keys()`, `set.values(), `set.entries()`
console.log(visitorsSet.values());

// iteration over `map` & `set` are always in insertion order
// but we can't change the order or get an element by its number

// **** Tasks
// create an array of unique values from the array below
const buddah = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function makeUniqueArr(arr) {
  // let set = new Set(arr);
  // arr.forEach((value) => set.add(value));
  // alternatively - do it the short way!
  return Array.from(new Set(arr));
}

console.log(makeUniqueArr(buddah));

// write a function that returns an array cleared of anograms
const anogramArr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "arse",
  "earth",
  "Heart",
  "ears",
];

function clearAnograms(arr) {
  const map = new Map();

  // loop through each word in the array
  arr.forEach((word) => {
    // create the `key` name for the `map` from each word in `arr`
    const key = word.toLowerCase(word).split("").sort().join("");
    console.log("key", key);

    // set each key / value pair of the map
    // note: each key / value pair will be overwritten with the latest!
    // e.g. `aers → "arse"` overwritten with `aers → "ears"` as "ears" comes last
    // in the processing chain i.e. last array entry
    map.set(key, word);
    console.log("map:", map);
  });

  // we don't need `keys` in the final array, so just map the `values` in the `Map`
  return Array.from(map.values());
}

console.log(clearAnograms(anogramArr));

// ******  Sets END ******\\
