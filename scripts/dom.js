console.log("DOM stuff");

// store a reference to the table
let table = document.body.firstElementChild;

console.log(table.rows.length);

// table.children[0].children[0].children[3].style.backgroundColor = "red";

// paint a diagonal of red cells
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}
