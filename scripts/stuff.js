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
// sum even numbers
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
  return `<h3>${score[0]}: ${score[1]}</h3>`;
});
console.log(newScore);
container.innerHTML += newScore;

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

// ******
// ******  Arrays END ******\\
