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

function line(color = "red", width = 1, x1, y1, x2, y2) {
  //1. Set the line style options
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  //2. Draw the line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

line("hsl(46, 45%, 45%)", 10, 1, 128, 129, 128);

line("hsl(46, 45%, 45%)", 20, 11, 128, 11, 256);
line("hsl(46, 45%, 45%)", 20, 119, 128, 119, 256);

line("hsl(46, 45%, 45%)", 10, 148, 184, 212, 184);
line("hsl(46, 45%, 45%)", 10, 207, 184, 207, 96);

ctx.fillStyle = "hsla(46, 45%, 45%, 0.5)";
ctx.strokeRect(36, 64, 64, 50);
ctx.fillRect(48, 64, 40, 50);
