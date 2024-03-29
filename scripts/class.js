console.log("Classy dude!");

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHhi() {
//     console.log(`Hi ${this.name}`);
//   }
// }

// let user = new User("John");
// user.sayHhi();
// console.log(user); // Object { name: "John" }
// console.log(User); // class User { constructor(name) }

// just like function, a `class` can be defined in an expression:

// let User = class {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
// };

// let andy = new User("Andy").sayHi(); // Hi Andy
// console.log(andy); // undefined ???

// const User = class {
//   constructor(name) {
//     // invokes `name`
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name too short, min of 4 characters required");
//       return;
//     }
//     this._name = value;
//   }
// };

// let userJohn = new User("John");
// console.log(userJohn.name); // John

// userJohn.name = "Johnathon";
// console.log(userJohn.name); // Johnathon

// // losing `this`
// class Button {
//   constructor(value) {
//     this.value = value;
//   }

//   click() {
//     alert(this.value);
//   }
// }

// let button = new Button("Hey there");

// // setTimeout(button.click, 1000); // undefined
// // works
// // button.click(); // Hey there

// // but pass it to a function and we lose `this`
// // setTimeout(button.click(), 1000);

// // thre ways to fix `this`
// // 1: use a wrapper function to call the method
// // setTimeout(() => button.click(), 3000);

// // 2: `bind` the method to the object in the constructor
// class Button2 {
//   constructor(value) {
//     this.value = value;
//     this.click = this.click.bind(this);
//   }

//   click() {
//     alert(this.value);
//   }
// }
// // we can now pass the class method `click` around to
// // other functions without losing `this`
// let button2 = new Button2("button 2");
// setTimeout(button2.click, 1000); // button 2

// // 3: using class fields is an another alternative
// // but there are some issues ??????
// // yes! Use class methods first and only convert them
// // to class fields if you need to pass them around to
// // functions, especially event listeners
// class Button3 {
//   constructor(value) {
//     this.value = value;
//   }
//   // hold the click method in a class field:
//   click = () => {
//     alert(this.value);
//   };
// }

// let button3 = new Button3("button 3");
// setTimeout(button3.click, 1000); // button 3

// ****** SUMMARY ******
// the basic syntax looks like this:
class MyClass {
  prop = value; // property

  constructor(...args) {
    // contructor
    // ...
  }

  method1(...args) {} // method
  method2() {} // method

  // getter can not have any parameters
  get something() {} // getter method
  // setters must have exactly ONE parameter
  set something(arg) {} // setter method

  ["say" + "Hi"]() {} // method with computed name
}

// rewrite this function as a class
function Clock({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
    console.log("clock stopped");
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// setTimeout(clock.stop, 10000);

class MyClock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
    console.log("myClock stopped");
  }

  start() {
    console.log("myClock started");
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let myClock = new MyClock({ template: "h:m:s" });
myClock.start();
setTimeout(() => myClock.stop(), 5000);
