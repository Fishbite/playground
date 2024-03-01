console.log("Test this....");

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
function getPosIntVal() {
  // get a `Number` from the user NOT a string
  let val = Number(prompt("enter a whole number greater than Zero"));

  // Check val in an integer greater than zero then return it
  // otherwise alert the user & `return "Undefined"`
  return Number.isInteger(val) && val > 0
    ? val
    : alert("number not supported. Try again!");
}

// return a number to the power of `n`
function pow() {
  let radix; // var to hold a `Number` for the radix value
  const num = getPosIntVal(); // get a `Number`

  // check we got a number back from `getPosIntVal()`
  // before we try to get a value for the radix
  // end the program if we don't have a `Number`
  if (!num) return console.log("ERROR: No number to multiply");
  radix = getPosIntVal();

  // Check we got a `Number` for the radix
  // before trying to return the answer
  // end the program if we don't have a `Number`
  if (!radix) return alert("No radix to multiply the number by <|3¬/");

  return alert(`${num}^${radix} = ${num ** radix}`);
}

// ******  function shit END ******\\
