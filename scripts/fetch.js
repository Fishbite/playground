console.log("Fetched it!");

// get a JSON-object with latest commits from GitHub:
// note: wrapped in IIFE to run imediately
(async function () {
  let url = "https://api.github.com/repos/Fishbite/playground/commits";

  let response = await fetch(url);
  let commits = await response.json();

  console.log(commits[0].author.login); // Fishbite
})();

(async () => {
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  let response = await fetch(url);

  let commits = await response.json(); // read response body and parse as JSON

  console.log(commits[0].author.login);
})();

// or the same without using `await` using pure promises syntax

let response = fetch("https://api.github.com/repos/Fishbite/playground/commits")
  .then((response) => response.json())
  .then((commits) => {
    console.log(commits.length); // 30
  });

//  or, to get the response in text:
fetch("https://api.github.com/repos/Fishbite/playground/commits")
  .then((response) => response.text())
  // log a slice of the response to the console
  .then((text) => console.log(text.slice(0, 320) + "..."));
