// "use strict";

// #########################################
// This file covers:
// foreach
// getters & setterd
// localStorage

console.log("Raaaahhhh");

//  #########################################
// using `foreach()`
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

// apparently, `foreach` takes a callback function!
// and you can still access the counter `i`

function returnElement(el, i, array) {
  console.log(i, el, "should be the same as", array[i]);
  const box = document.createElement("div");
  box.setAttribute("class", "month-name");
  box.style.backgroundColor = "grey";
  box.style.border = "4px solid rgb(20, 20, 18)";
  box.style.boxSizing = "border-box";
  box.style.display = "inline-block";
  box.style.padding = "0.5rem 2rem";
  box.style.marginRight = "0.25rem";
  box.innerHTML += el;
  document.getElementById("main").appendChild(box);
  return el;
}

months.forEach(returnElement);

// ##############################################
// `getters` & `setters`
// NB: use getters & setters carefully & only read/write to one property value
// otherwise you can create real debugging problems
let jar = {
  numberOfCookies: 10,
  // use `jar.cookies` to return the number of cookies in the jar
  get cookies() {
    return `there are ${this.numberOfCookies} cookies in the jar`;
  },
  // use `jar.cookies = ` to set the number of cookies in teh jar.
  // we can add some restraints to the value that we are trying to set
  set cookies(value) {
    if (value > 10 || value < 0) {
      console.log("number of cookies must be 0 or greater but less than 10");
      return;
    }
    this.numberOfCookies = value;
  },
};

// show the number of cookies in the jar
console.log(jar.cookies);

// set the number of coookies in the jar
jar.cookies = 9;
console.log(jar.cookies); // 9

// this display an alert because the value being set is out of range
jar.cookies = 12;
console.log(jar.cookies);

// problem is we can still change the numberOfCookies directly:
jar.numberOfCookies = 45;
console.log(jar.cookies); // there are 45 cookies in the jar!!!!

//  ################################################
// to prevent this we can use `Object.defineProperty`
// which we can configure a property to be writable or not
// we'll define a property called 'cookies' that we can't access directly
// but can read & write to with a getter or setter
jar = {};
Object.defineProperty(jar, "cookies", {
  get() {
    return this.value;
  },
  set(newValue) {
    if (newValue < 0 || newValue > 10) {
      // halt the program with an error
      throw new Error("please use a value between 0 and 10 inclusively");
    } else this.value = newValue;
  },
  enumerable: true,
  configurable: true,
});

console.log(`cookies = ${jar.cookies}`); // 'undefined' as we haven't set a value

jar.cookies = 10;
console.log(`cookies: ${jar.cookies}`); // 'cookies: 10'

// ##############################################
// without defining the getters & setters

let car = {};
Object.defineProperty(car, "colour", {
  value: "red",
  writable: false,
  enumerable: true,
  configurable: true,
});

// now we can get the value of the car colour like this:
console.log(car.colour);

// but we can't set the colour value because `writable` is false
car.colour = "blue"; // throws error in strict mode: Uncaught TypeError: "colour" is read-only
// the rest of the script wont run because of the error thrown above
// so if we don't enforce strict mode setting car.colour = "some value" will just silently fail. and the next line will run
// note: if you are using modules strict mode is automatically enforced
console.log(car.colour); // red

// #################################################
// local storage
// use local storage to permanently store data in the browser
let anyNumber = 34;
localStorage.setItem("keyName", anyNumber);
// fetch the stored data like this:
let gotData = localStorage.getItem("keyName");
console.log(gotData);

// note the all data is stored as a string:
console.log(gotData, " is a ", typeof gotData); // 34 is a string

// to use it as a number we need to `parseInt` or `parseFloat`
gotData = parseFloat(localStorage.getItem("keyName"));
console.log(gotData, " is a ", typeof gotData); // 34 is a number

// clear a local storage item
localStorage.removeItem("keyName");
// or remove everything in local storage:
localStorage.clear();
console.log(localStorage); // Storage { length: 0 }

// save multpile items in one go using an object
let gameData = {
  player: "Stu",
  CurrLevel: 5,
  score: 120,
  items: ["chaingun", "bomb", "teleporter"],
};

localStorage.setItem("gameData", gameData);

let gotGameData = localStorage.getItem("gameData");
console.log(gotGameData); // [object object] not very usefull

// so we have to turn the object into a JSON object
let gameDataJSON = JSON.stringify(gameData);
// then save this to local storage
localStorage.setItem("gameData", gameDataJSON);

let data = JSON.parse(localStorage.getItem("gameData"));
console.log(data); // Object { player: "Stu", CurrLevel: 5, score: 120, items: (3) […] }
console.log(data.player); // Stu
console.log(data["items"]); // Array(3) [ "chaingun", "bomb", "teleporter" ]
console.log(data["items"][1]); // bomb

// clear the storage
localStorage.clear();
console.log(localStorage);
