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

// ctx.fillStyle = "hsla(46, 45%, 45%, 0.5)";
// ctx.strokeRect(36, 64, 64, 50);
// ctx.fillRect(36, 64, 64, 50);

let ww = window.innerWidth;
let wh = window.innerHeight;

let datumX = ww / 2 - canvas.width / 2;
let datumY = wh / 2 - canvas.height / 2;
console.log(ww, datumX);

// onmousemove = (e) => console.log("mouse location:", e.x - datumX, e.y - datumY);

canvas.addEventListener("click", drawLine, false);
document.addEventListener("keydown", handleKey, false);

let drawing = false;
let tx, ty;

function drawLine(e) {
  if (!drawing) {
    tx = e.clientX - datumX;
    ty = e.clientY - datumY;
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    drawing = true;
  } else {
    console.log("drawing = ", drawing);
    tx = e.clientX - datumX;
    ty = e.clientY - datumY;
    ctx.lineTo(tx, ty);
    ctx.stroke();
  }
  console.log(tx, ty);
}

function handleKey(e) {
  console.log(e.key);

  if (isFinite(e.key)) {
    ctx.lineWidth = e.key;
  }

  if (e.key === "Enter") {
    drawing = false;
  }

  if (e.key === "c") {
    ctx.closePath();
    ctx.stroke();
    drawing = false;
  }
}
