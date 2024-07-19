console.log("full screen script");

// get the element we want to set to full screen
const stage = document.getElementById("stage");
let title = stage.firstElementChild.innerText;
console.log(title);

// add an event listener to the element
stage.addEventListener("mousedown", goFullScreen, false);
console.log(stage.children);

// callback to set full screen mode
function goFullScreen(e) {
  stage.requestFullscreen();

  // add an event listener to exit full screen
  stage.addEventListener("click", goNormalScreen, false);

  setFullScreenTxt();
}

// set the full screen text
function setFullScreenTxt() {
  stage.style.color = "grey";
  stage.firstElementChild.innerText = "I'm Full Screen!";
  stage.children[1].innerText = "Click me to get out of full sceen mode";
}

// callback to unset full screen mode
function goNormalScreen(e) {
  if (document.fullscreenElement) {
    document.exitFullscreen();

    setNormalTxt();
  }
}

// function to set normal screen text
function setNormalTxt() {
  stage.style.color = "black";
  stage.children[0].innerText = "I'm not full screen anymore :-(";
  stage.children[1].innerText = "Click me to go full screen again";
}
