console.log("DOM stuff");

// store a reference to the table
const table3 = document.body.firstElementChild;

// console.log(table3.firstElementChild.lastElementChild.rowIndex);

// table.children[0].children[0].children[3].style.backgroundColor = "red";

// render a diagonal of red cells
// dont render the sixth row
// for (let i = 0; i < table.rows.length - 1; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = "red";
// }

// To render a checkerboard of blue squares
// First, loop through each row
for (let i = 0; i < table3.rows.length; i++) {
  // give each row a temporary number
  let rowNum = i;
  // give each column a temporary number
  let colNum = 0;
  // number of columns
  let numCols = table3.rows[0].cells.length;

  // Then loop through each column
  for (; colNum < numCols; colNum++) {
    // create reference each cell on each iteration
    let td = table3.rows[rowNum].cells[colNum];

    // give each cell a temporary number
    let cellNum = td.cellIndex;

    // render every other odd numbered cell on each even numbered row
    // & render every other even numbered cell on odd numbered rows
    // don't forget column number is index number so column 2 is index 1
    if (
      (rowNum % 2 === 0 && cellNum % 2 === 0) ||
      (rowNum % 2 !== 0 && cellNum % 2 !== 0)
    ) {
      td.style.backgroundColor = "blue";
    }
  }
}

const table4 =
  document.body.lastElementChild.previousElementSibling.previousElementSibling
    .previousElementSibling;

// Loop through rows
for (let row of table4.rows) {
  // Loop through cells
  for (let td of row.cells) {
    // Apply checkerboard pattern
    if ((td.cellIndex + row.rowIndex) % 2 === 1) {
      td.style.backgroundColor = "red";
    }
  }
}

// render a diagonal line
for (let i = 0; i < table4.rows.length; i++) {
  let row = table4.rows[i];

  if (row.cells[i]) row.cells[i].style.backgroundColor = "purple";
}

let pete =
  document.body.lastElementChild.previousElementSibling.children[1].innerHTML;
console.log(pete);

let users = document.getElementById("users");

let blueTitle = "<h1>The Blue Table</h1>";
let redTitle = "<h1>The Red Table</h1>";

// stick a title before the first table
table3.insertAdjacentHTML("beforebegin", blueTitle);
// stick a title before the first table
table4.insertAdjacentHTML("beforebegin", redTitle);

let john = document.getElementById("userJohn");
pete = document.getElementById("userPete");
console.log(pete, john);

// take `pete` and put `john` after him
pete.after(john);

// take pete and put table4 after him
pete.after(table4);

// clone table4 node
// note `true` copies the children of the cloned element too
// i.e. tr's & td's & text
let table5 = table4.cloneNode(true);
john.after(table5);
