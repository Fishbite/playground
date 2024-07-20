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

// set references to the top left of the canvas
let datumX = ww / 2 - canvas.width / 2;
let datumY = wh / 2 - canvas.height / 2;

// onmousemove = (e) => console.log("mouse location:", e.x - datumX, e.y - datumY);

// ########################################################

//              A PROGRAM TO DRAW ON THE CANVAS

// ########################################################

// listen for clicks to initiate or continue line drawing
canvas.addEventListener("click", drawLine, false);

// listen for keys to set drawing params
document.addEventListener("keydown", handleKey, false);

// if drawing = false, the start point of the line
// has not been defined. i.e. the first `moveTo(x, y)`
// has not been completed
let drawing = false;

// tx = target point x
// ty = target point y
// lastX = last end x point of the line
// lastY = last end y point of the line
// setX / Y used to set the target point x or y when vertical
// or horizontal lines are to be drawn
let tx, ty, lastX, lastY, setX, setY;

function drawLine(e) {
  // set the target points relative to the canvas top left
  tx = e.clientX - datumX;
  ty = e.clientY - datumY;

  // if there isn't a line end point to continue from
  if (!drawing) {
    // begin a new path and move to the start point
    ctx.beginPath();
    // move to the start point of the line
    // i.e. the click point on the canvas
    ctx.moveTo(tx, ty);

    // store the current target points in last point vars
    [lastX, lastY] = [tx, ty];

    // set to true so the next mouse click draws
    // the line starting from last line end point
    drawing = true;

    // if key 'x' has been pressed we want to draw a
    // horizontal line, so set ty to the last y end point via setY
  } else if (setY) {
    // draw a horizontal line using the last y end point
    ctx.lineTo(tx, setY);
    ctx.stroke();
    setY = null; // remove value

    // store the current target points in last point vars
    [lastX, lastY] = [tx, setY];
    // if key 'y' has been pressed we want to draw a
    // vertical line, so set tx to the last x end point via setX
  } else if (setX) {
    console.log(setX);

    // draw a vertical line using the last x end point
    ctx.lineTo(setX, ty);
    ctx.stroke();
    setX = null; // remove value

    // store the current target points in last point vars
    [lastX, lastY] = [setX, ty];

    // draw a line starting from the last line end point
    // to the target x / y points defined by mouse click
  } else {
    ctx.lineTo(tx, ty);
    ctx.stroke();

    // store the current target points in last point vars
    [lastX, lastY] = [tx, ty];
    console.log(lastX, tx, lastY, ty);
  }
}

function handleKey(e) {
  console.log(e.key);

  // has a number been pressed?
  if (isFinite(e.key)) {
    ctx.lineWidth = e.key; // set the line width
  }

  // if the enter key is pressed, start a new line
  if (e.key === "Enter") {
    drawing = false;
  }

  // close the path when the 'c' key is pressed
  if (e.key === "c") {
    ctx.closePath();
    ctx.stroke();
    drawing = false;
  }

  // draw a horizontal line if the 'x' key has been pressed
  if (e.key === "x") {
    setY = lastY;
  }

  // draw a vertical line if the 'y' key has been pressed
  if ((e.key = "y")) {
    setX = lastX;
  }
}
