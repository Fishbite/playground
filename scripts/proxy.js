console.log("proxy.js");
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

// set a `get` trap on read operation on `dict`

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
// looks like the number of writes are logged!!!?
numArr.push(0); // write success: 0 write success: 1
numArr.push(3); // write success: 3 write success: 2
numArr.push(9); // write success: 9 write success: 3
numArr.push(81); // write success: 81 write success: 4

console.log(numArr); // logs the below to the console
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

numArr.push("'A string'"); // typeError: proxy set handler returned false for property '4'

console.log("this line is never reached because of error in line above");
