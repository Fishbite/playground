console.log("Fetched it!");

// // get a JSON-object with latest commits from GitHub:
// // note: wrapped in IIFE to run imediately
// function getUser() {
//   (async function () {
//     let url = "https://api.github.com/repos/Fishbite/playground/commits";

//     let response = await fetch(url);
//     let commits = await response.json();

//     console.log("response.status:", response.status); // 200
//     console.log(commits[0].author.login); // Fishbite
//   })();
// }
// getUser();

// (async () => {
//   let url =
//     "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
//   let response = await fetch(url);

//   let commits = await response.json(); // read response body and parse as JSON
//   console.log("commits[0]", commits[0]);
//   console.log(commits[0].author.login);
// })();

// // or the same without using `await` using pure promises syntax

// let response = fetch("https://api.github.com/repos/Fishbite/playground/commits")
//   .then((response) => response.json())
//   .then((commits) => {
//     console.log("No. of commits", commits.length); // 30
//     console.log("commits[0].author.login:", commits[0].author.login);
//   });

// //  or, to get the response in text:
// fetch("https://api.github.com/repos/Fishbite/playground/commits")
//   .then((response) => response.text())
//   // log a slice of the response to the console
//   .then((text) => {
//     console.log("text.slice(0, 320) + '...':", text.slice(0, 320) + "...");
//     console.log("text:", text);
//   });

// canvasElem.onmousemove = function (e) {
//   let ctx = canvasElem.getContext("2d");
//   ctx.lineTo(e.clientX, e.clientY);
//   ctx.stroke();
// };

// async function submit() {
//   let blob = await new Promise((resolve) =>
//     canvasElem.toBlob(resolve, "image/png")
//   );
//   let response = await fetch("/article/fetch/post/image", {
//     method: "POST",
//     body: blob,
//   });

//   // the server responds with confirmation and the image size
//   let result = await response.json();
//   alert(result.message);
// }

// GET users from github
async function getUsers(names) {
  let jobs = [];

  for (let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          console.log(successResponse);
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  console.log(results);
  return results;
}

// getUsers(["iliakan", "remy", "no.such.users", "Fishbite"]);
