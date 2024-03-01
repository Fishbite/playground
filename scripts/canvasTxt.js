// make the canvas element and add it to the DOM
let canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
canvas.style.border = "1px solid black";
canvas.style.backgroundColor = "white";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

//Create a text string defines the content you want to display
let content = "My Data";
//Assign the font to the canvas context.
//The first value is the font size, followed by the names of the
//font families that should be tried:
//1st choice, fall-back font, and system font fall-back
ctx.font = "14px 'Rockwell Extra Bold', 'Futura', sans-serif";
//Set the font color to red
ctx.fillStyle = "red";
//Figure out the width and height of the text
let width = ctx.measureText(content).width,
  height = ctx.measureText("M").width;
//Set the text's x/y registration point to its top left corner
ctx.textBaseline = "top";
//Use `fillText` to Draw the text in the center of the canvas
ctx.fillText(
  content, //The text string
  10, //The x position
  canvas.height / 2 - height / 2 //The y position
);
