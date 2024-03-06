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

// ******  Numbers shit START ******\\
// ******
function getTwoNums() {
  const a = +prompt("a?", "");
  const b = parseFloat(prompt("b?", ""));

  return {
    a,
    b,
  };
}

function sum(func) {
  let tot = 0;
  for (let i in func) {
    tot += func[i];
  }
  alert(tot);
  return tot;
}

console.log(sum(getTwoNums()));
// ******
// ******  Numbers shit END ******\\
