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

// class MyClock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//     console.log("myClock stopped");
//   }

//   start() {
//     console.log("myClock started");
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let myClock = new MyClock({ template: "h:m:s" });
// myClock.start();
// setTimeout(() => myClock.stop(), 5000);

class Animal {
  constructor(name) {
    this.speed = 0; // property
    this.name = name; // property passed as parameter
  }

  run(speed) {
    // method
    this.speed = speed;
    console.log(`${this.name} runs at ${this.speed}cm per second.`);
  }

  stop() {
    // method
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

// class Rabbit extends Animal {
//   stop() {
//     // replaces parents class' `stop` method
//     // ***
//   }
// }

/*
Usually, however, we don’t want to totally replace a parent 
method, but rather to build on top of it to tweak or extend 
its functionality. We do something in our method, but call 
the parent method before/after it or in the process.

Classes provide "super" keyword for that.

    super.method(...) to call a parent method.
    super(...) to call a parent constructor (inside our constructor only).

    a derived constructor must call `super` in order to execute its parent (base) constructor, otherwise the object for `this` won’t be created. And we’ll get an error.
*/

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(); // call the parent `constructor
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  hide() {
    // method of Rabbit
    console.log(`${this.name} hides!`); // gets `name` from `Animal`
  }

  stop() {
    // method of `Rabbit`
    console.log("Child objects `this`", this);
    // using the `Animal` stop method
    super.stop(); // calls parent's `stop` method
    setTimeout(() => this.hide(), 1000); // calls Rabbit's `hide` method binding `this` to the child `Object`
  }
}

let buggsy = new Rabbit("Bugs Bunny", 10);
// Bugs Bunny runs at 50cm per second.
buggsy.run(50); // calls `Animal` `stop` method

// Bugs Bunny stands still.
// Bugs Bunny hides!
setTimeout(() => buggsy.stop(), 2000); //calls `Rabbit` `stop` method
