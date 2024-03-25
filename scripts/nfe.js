console.log("Named function Expressions");
// NFE's are used to give a name to a function expression
// that name can be use internally by the function
// to reference itself
// let myFunc = function func(num) {
//   if (num > 5) return console.log(`Done! Count = ${num}`); // stop the function
//   console.log(num);

//   //   return myFunc(num + 1); // not good - myFunc could be null  at later time
//   return func(num + 1); // function name can be referenced internally, is better
//   //   now any other reference to func still works
//   // i.e. let newFunc = myFunc; myFunc = null; newFunc still references func
// };
// myFunc(1);

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0;
//   return counter;
// }
// let counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1

// // add a property that sets the count property value
// makeCounter.set = function set(num) {
//   return (counter.count = num);
// };

// let setCounter = makeCounter.set;
// console.log(setCounter(4)); // 4

// // add a property to decrease the count property value
// makeCounter.decrease = function decrease() {
//   return --counter.count;
// };
// let decreaseCount = makeCounter.decrease;
// console.log(decreaseCount()); // 3
// console.log(decreaseCount()); // 2

// A better way to add mmethods to counter
function makeCounter2() {
  function counter() {
    return counter.count++;
  }
  counter.count;

  counter.set = (val) => (counter.count = val);
  counter.decrease = () => --counter.count;

  return counter;
}
let counter = makeCounter2();
console.log(counter.set(4));
console.log(counter.decrease());
console.log(counter.decrease());
