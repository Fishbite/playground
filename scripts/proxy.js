console.log("proxy.js");

function start(name = "Trap type") {
  console.log(`
++++++++++++++++ START ${name} Trap ++++++++++++++++

`);
}

function end(name = "Trap type") {
  console.log(`
---------------- END ${name} Trap ----------------

`);
}

/*
    A `Proxy` object wraps another object and intercepts operations such
    as read / write properties and others, optionally handling them on its
    own, or transparently allowing the object to handle them

    The syntax is:
    let proxy = new Proxy(target, handler);

    `target` is an object to wrap, which can be anything, inc functions
    `handler` an object with 'traps' methods that intercept operations

    For operations on `proxy` if there is a corresponding `trap` in the
    `handler`, then it runs and the proxy has a chance to handle  it,
    otherwise the operation is performed on the target.

    `Proxy` object are commonly used to log property access, validate,
    format or sanitize inputs
*/

// A `Proxy` with no handler
start("no");

let proxyTarget = {};
let proxy = new Proxy(proxyTarget, {}); // an empty `Proxy` handler

// writing to the proxy, also writes to the target:
proxy.testProperty = "new property written to `proxy`";
proxy.anotherProp = "another property written to `proxy`";

// as there are no traps, all operations are forwarded to `proxyTarget`

// reading from `proxy`returns the value from `proxyTarget`
console.log(`proxy: ${proxy} 
taget property: ${proxyTarget.testProperty}`); // property written to target
// ...is also written to the `Proxy` object
console.log(`property on proxy object: ${proxy.testProperty}`);

// test iteration works on the `proxy`
// iteration over proxy returns values from `proxyTarget`
for (let key in proxy) console.log(key); // log each property name of `proxy`

end("no");

// set a `get` trap on read operation on `dict`

start("get");

let dict = {
  Hello: "Hola",
  bye: "Adios",
};

let dictProxy = new Proxy(dict, {
  get(target, val) {
    // intercept reading a property from `dict`
    if (val in target) {
      // if we have it in `dict`
      return target[val]; // return the property value
    } else {
      // return the missing value that someone tried to read
      return val;
    }
  },
});

// look up values in the target
console.log(dictProxy["Hello"]); // "hola"
console.log("Welcome"); // "Welcome" as no property called "Welcome" exists

end("get");

start("set");

// use a `set` trap to check writes to the target object are valid
// i.e. we have an array that should contain only numbers
let numArr = [];

// syntax = set(target, property, value, receiver):
numArr = new Proxy(numArr, {
  set(target, prop, val) {
    if (typeof val === "number") {
      target[prop] = val; // write the val to target
      console.log(`write success: ${target[prop]}`);
      return true; // must return true for a successful write
    } else {
      console.log(`${val} is not a number!`);
      return false; // for a write operation failure i.e. wasn't a number
    }
  },
});

// write to the target
// note the two line output in the console
// // looks like the number of writes are logged!!!?
// numArr.push(0); // write success: 0 write success: 1
// numArr.push(3); // write success: 3 write success: 2
// numArr.push(9); // write success: 9 write success: 3
// numArr.push(81); // write success: 81 write success: 4

// console.log(numArr); // logs the below to the console
/*
Proxy { <target>: (4) […], <handler>: {…} }​
  <target>: Array(4) [ 0, 3, 9, … ]​​
    0: 0​​
    1: 3​​
    2: 9​​
    3: 81​​
    length: 4​​
  <prototype>: Array []​
<handler>: Object { set: set(target, prop, val) }
  <handler>: Object { set: set(target, prop, val)
 }​​
  set: function set(target, prop, val)​​
  <prototype>: Object { … }
*/

// sending a string to the array causes an error:
// numArr.push("'A string'"); // typeError: proxy set handler returned false for property '4'

// console.log("this line is never reached because of error in line above");

end("set");

start("ownKeys");
// use `ownKeys` to filter out the pwd when `for...in` loops over it
let user = {
  name: "John",
  age: 31,
  _pwd: "***",
};

user = new Proxy(user, {
  ownKeys(target) {
    // filter out any keys starting with an underscore
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

for (let key in user) console.log(key); // name, age

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.values(user)); // ["John", 31]

user = {};

console.log(Object.values(user)); // []

end("ownKeys");

start("Private keys");

// use a proxy to deny access to properties starting with an underscore
/* 
    technically it's possible to access properties starting with "_"
    but we should NOT as it is a convention, so, we'll use a proxy
    to prevent access to keys starting with "_" externally but still
    allow the objects methods to access them.
    e.g. the method `checkPwd()` should have access to key `_pwd`
*/

// but allow the objects methods to access them

user = {
  name: "john",
  _pwd: "***",
  checkPwd(value) {
    return value === this._pwd;
  },
};

// test the object method works
// console.log(user.checkPwd("***")); // true

// now prevent external access using a proxy

user = new Proxy(user, {
  // deal with calls to `get` value
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access Denied! :¬P you no get me");
    }

    let value = target[prop];
    console.log(value);
    // check if it's a method's function trying to access the key, if so
    // So we bind the context of object methods to the original object, target
    // Then their future calls will use target as this, without any traps.
    return typeof value === "function" ? value.bind(target) : value;
  },

  // deal with calls to `set` the value
  set(target, prop, val) {
    if (prop.startsWith("_")) {
      throw new Error("Access Denied! fck off! :-{ you no set me");
    } else {
      target[prop] = val; // set the value of the property
      return true;
    }
  },
  // intercept attempts to delete a property
  deleteProperty(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Access Denied! Scumbag, you no delete me");
    } else {
      delete target[prop];
      return true;
    }
  },

  // intercept `for...in` and methods that list the contents of an object
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
  },
});

// now lets try (excuse the pun) to perform some operations on the object

// try to get the password
try {
  console.log("get password:", user._pwd);
} catch (err) {
  console.log("Error!", err.message); // Access Denied :¬P
}

// try to set the password
try {
  console.log("Set the password", (user._pwd = "arse"));
} catch (err) {
  console.log("Error!", err.message); // Error! Access Denied, fck off! :-{
}

// try to delete the password
try {
  console.log("Delete password:", delete user._pwd);
} catch (err) {
  console.log("Error:", err.message);
}

// try to iterate over the properties
try {
  for (let key in user) {
    console.log("Key:", key);
  }
} catch (err) {
  console.log("Error:", err.message);
}

end("Private keys");

start("In Range");
// we have a range object

let range = {
  start: 1,
  end: 10,
};

// and we want to use the `in` operator to check if a value is `in` range

// the `has` trap intercepts `in` calls

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end;
  },
});

console.log("Value in range?", 4 in range); // true
console.log("Value in range?", 11 in range); // false

let vals = [0, 1, 5, 78, 3];

for (let i = 0; i < vals.length; i++) {
  console.log(vals[i], "in range?", vals[i] in range);
} // 0 in range? false
// 1 in range? true
// 5 in range? true
// 78 in range? false
// 3 in range? true

end("In Range");
