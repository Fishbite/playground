// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     const sum = 4 + 5 + "a";
//     if (isNaN(sum)) {
//       reject("It all fuk'd up man!");
//     } else {
//       resolve(sum);
//     }
//   }, 2000);
// });

// promise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// message to show we are connected to the document
console.log("Ok, linked to main.js");

// Get the elements that we want to target from our document
const body = document.querySelector("body");

const mainParaCollection = document.getElementsByClassName("mainPara");

const subParaCollection = document.getElementsByClassName("subPara");

for (let i = 0; i < mainParaCollection.length; i++) {
  console.log(mainParaCollection[i]);
}

// const title_1 = document.getElementById("title_1").style.lineHeight;
// console.log(title_1); // returns <empty string>

console.log(mainParaCollection); // shows the array-type object

// we need to loop through each entry in the html collection
// so, lets write a reusable function
function changeBackgroundColorOfHTMLColection(name, color) {
  for (let i = 0; i < name.length; i++) {
    name[i].style.backgroundColor = color;
  }
}

changeBackgroundColorOfHTMLColection(mainParaCollection, "sandybrown");

changeBackgroundColorOfHTMLColection(subParaCollection, "tan");

function changeTextColorOfHMTLCollection(name, value) {
  for (let i = 0; i < name.length; i++) {
    name[i].style.color = value;
  }
}

changeTextColorOfHMTLCollection(mainParaCollection, "saddlebrown");

// mainParaCollection[0].style.backgroundColor = "olivedrab";

body.style.backgroundColor = "peachpuff";

function sum(a, b) {
  let sum = a + b;

  console.log(sum);

  return sum;
}
let a = "what, you got " + sum(5, 6);
let total = sum(a, " too?");
console.log(total);

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    if (!arr[i].includes(elem)) newArr.push(arr[i]);
  }

  // using `globalThis` to define a variable named `curse`
  globalThis.curse = "Arse";
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);

console.log(globalThis, curse);

// A simple calculator
const calculator = (function () {
  function add(a, b) {
    console.log("a + b = ", a + b);
    return a + b;
  }

  function multiply(x, y) {
    console.log("x * y =", x * y);
    return x * y;
  }

  return {
    add: add,
    multiply: multiply,
  };
})();

calculator.add(4, 5);
calculator.multiply(4, 5);
