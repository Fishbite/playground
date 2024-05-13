console.log("forms");

// show htmlCollection of forms in the document
console.log(document.forms); // named collection

// reference to the first form in the document
let form1 = document.forms[0];
console.log(form1); // <form id="formOne" name="form1">

console.log(form1.elements); // { 0: fieldset, 1: input, length: 2, … }

console.log(form1.elements.textinput); // <input name="textinput" type="text">

console.log(form1.elements.textinput.type); // text

// shortcut - don't need to use `.elements`
// ***** BEWARE if you change the name of the element it will have two names, the old name and the new name!!!
console.log(form1.name, form1.id); // form1 formOne

console.log(form1.textinput); // <input name="textinput" type="text">
console.log(form1.textinput.type); // text

// set reference to the second form i the document
let form2 = document.forms[1];

// log the form
console.log(form2); // <form id="formTwo" name="form2">

// log all elements named radioinput
console.log(form2.lovehate); // RadioNodeList { 0: input, 1: input, value: "love", length: 2 }

// log the first radioinput element
console.log(form2.lovehate[0]); // <input name="radioinput" type="radio" value="love">

// log the value of the first radioinput element
console.log(form2.lovehate[0].value); // love

// log the value of the second radioinput element
console.log(form2.lovehate[1].value); // hate

// for a text area, always use `value` to get user input
// Do NOT use `innerHTML` it only stores what was initially on the page
// and not the user input
console.log(form2.story.value); // get user input

console.log(
  (form2.story.value = "It was a cold clear night with the moon shining bright")
); // set a new value

console.log(form2.story.value); // get the new value

// form elements reference the form so we can access the
// elements directly with their `id`
console.log("selectedIndex:", select.selectedIndex);

console.log("select.options:", select.options);

console.log("selectmusic.options", selectmusic.options);

let selectedMusic = Array.from(selectmusic.options);
console.log("selectedMusic[0]", selectedMusic[0]); // <option value="apple">

console.log(
  selectedMusic
    .filter((option) => option.selected)
    .map((option) => option.value)
); // Array [ "blues", "rock" ]

console.log("selectedMusic[0].value:", selectedMusic[0].value); // blues

let newOption = new Option("reggae", "reggae");

selectmusic.append(newOption); // append the new option to the option list

newOption.selected = true;

console.log(
  Array.from(selectmusic.options)
    .filter((option) => option.selected)
    .map((option) => option.value)
); // Array(3) [ "blues", "rock", "reggae" ]
