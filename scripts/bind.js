console.log("Bind this!");

let user = {
  name: "John",
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};
// user.sayHi(); // Hello John

// setTimeout(user.sayHi, 1000); // Hello no john `this` is lost

// use a wrapper function to fix the lost `this`
setTimeout(() => user.sayHi(), 1000); // Hello John

// however, if the value of user changes before 1 sec, it will call the wrong object.
user = {
  name: "John",
  sayHi() {
    console.log(`Hello someone else`); // Hello someone else - wrong object calld
  },
};

// the solution is to `bind` `this`
let sayHi = user.sayHi.bind(user);

let user2 = {
  name: "Alan",
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};

sayHi = user2.sayHi.bind(user2); // bind `this` so the call references the correct object

// now we can call `sayHi`
setTimeout(sayHi(), 1000); // Hello Alan

// & even if value of user changes, `sayHi` will still call the correct
// object: `name` = "Alan" and not the new value of `name` below
user2 = {
  name: "Yet another user",
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};
