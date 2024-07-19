console.log("canvas....");

let canvas = document.createElement("canvas");
// canvas.style.border = "1px solid black";
canvas.style.backgroundColor = "rgb(50 25 10)";
// canvas.style.width = "256";
// canvas.style.height = "256";
canvas.setAttribute("width", "256");
canvas.setAttribute("height", "256");
document.body.appendChild(canvas);
let ctx = canvas.getContext("2d");

function line(color = "black", width = "1px", x1, y1, x2, y2) {
  //1. Set the line style options
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  //2. Draw the line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

line("black", "1px", 0, 128, 128, 128);

// ctx.strokeStyle = "hsl(46, 45%, 45%)";
// ctx.lineWidth = "1px";
// //2. Draw the line
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(512, 256);
// ctx.stroke();

// let canvas = document.createElement("canvas");
// canvas.setAttribute("width", "256");
// canvas.setAttribute("height", "256");
// canvas.style.border = "1px dashed black";
// document.body.appendChild(canvas);
// let ctx = canvas.getContext("2d");

// //1. Set the line style options
// ctx.strokeStyle = "black";
// ctx.lineWidth = 3;
// //2. Draw the line
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(128, 128);
// ctx.stroke();
