console.log("Bind this!");

let user = {
  name: "John",
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};
// user.sayHi(); // Hello John

// pass an Objects' method to another function & `this` is lost:
// setTimeout(user.sayHi, 1000); // Hello no john `this` is lost

// use a wrapper function to fix the lost `this`
setTimeout(() => user.sayHi(), 500); // Hello John or Hello someone else if `user` changed before 1 sec

// however, if the value of user changes before 1 sec, it will call the wrong object.
// and that is a VUNERABILITY!!!!
user = {
  name: "Penny",
  sayHi() {
    console.log(`VUNERABILITY!!!! user object changed before timeout`); // - wrong object called
  },
};

// the solution is to `bind` `this` to the `Object` `user`
// let sayHi = user.sayHi.bind(user);

let user2 = {
  name: "Alan",
  sayHi() {
    console.log(`Hello again ${this.name}`);
  },
};

// create a variable that stores a reference to the method
let sayHi2 = user2.sayHi.bind(user2); // bind `this` so the call references the correct object
// or if you don't bind `this`
let sayHi3 = user2.sayHi;

// now we can call `sayHi`
setTimeout(sayHi2, 1500); // Hello again Alan
// and again without the bound `this`
setTimeout(sayHi3, 1750); // Hello again - no Alan, `this` is lost

// & even if value of user changes like below, `sayHi2` will still call the correct
// object
user2 = {
  name: "Yet another user",
  sayHi() {
    console.log(`Hello you ${this.name}`);
  },
};

// If an object has many methods and we plan to pass it around
// we could bind them all using a loop:

let obj = {
  name: "My name is OBJECT!",
  log1() {
    console.log(`'log1' method of obj called ${this.name}`);
  },
  log2() {
    console.log(`'log2' method of obj called ${this.name}`);
  },
  log3() {
    console.log(`'log3' method of obj called ${this.name}`);
  },
};

function bindMethods(object) {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      // console.log(key);
      obj[key] = obj[key].bind(obj);
    }
  }
  // console.log(obj);
  return object;
}

bindMethods(obj);

let log1 = obj.log1;
let log2 = obj.log2;
let log3 = obj.log3;

setTimeout(log1, 750);
setTimeout(log2, 1000);
setTimeout(log3, 1500);

obj = {
  name: "Hi Jacked",
  log1() {
    console.log(`This function is not the original ${this.name}`);
  },
  log2() {
    console.log(`This function is ALSO not the original ${this.name}`);
  },
  log3() {
    console.log(`This function is AGAIN not the original ${this.name}`);
  },
};
