console.log("DOM stuff");

// store a reference to the table
const table3 = document.body.firstElementChild;

// console.log(table3.firstElementChild.lastElementChild.rowIndex);

// table.children[0].children[0].children[3].style.backgroundColor = "red";

// paint a diagonal of red cells
// dont paint the sixth row
// for (let i = 0; i < table.rows.length - 1; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = "red";
// }

// To paint a checkerboard of blue squares
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
    let cell = table3.rows[rowNum].cells[colNum];

    // give each cell a temporary number
    let cellNum = cell.cellIndex;

    // paint every other odd numbered cell on each even numbered row
    // & paint every other even numbered cell on odd numbered rows
    // don't forget column number is index number so column 2 is index 1
    if (
      (rowNum % 2 === 0 && cellNum % 2 === 0) ||
      (rowNum % 2 !== 0 && cellNum % 2 !== 0)
    ) {
      cell.style.backgroundColor = "blue";
    }
  }
}

const table4 = document.body.lastElementChild.previousElementSibling;

// Loop through rows
for (let row of table4.rows) {
  // Loop through cells
  for (let cell of row.cells) {
    // Apply checkerboard pattern
    if ((cell.cellIndex + row.rowIndex) % 2 === 1) {
      cell.style.backgroundColor = "red";
    }
  }
}
