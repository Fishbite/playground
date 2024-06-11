// ********************* FormData() *********************
// Using `FormData()` to wrap a file to send to a server

// ****** write to the document's element with `id="app"` ****** \\
document.getElementById("app").innerHTML = `
    <h1>File Upload & FormData Example</h1>
    <div>
    <input type="file" id="fileInput" />
    </div>
    `;

// *** make a reference to the file selector ***

const fileInput = document.querySelector("#fileInput");

// Use `fetch` to upload a file to the server

// function upload(file) {
//   const apiUrl = "https://file.io"; // API endpoint
//   const formData = new FormData(); // FormData
//   formData.append("file", file);

//   console.log(formData);

//   // Make POST request to API endpoint
//   fetch(apiUrl, {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       // handel a duff response
//       if (!response.ok) {
//         return response.json().then((json) => {
//           throw new Error(json.message);
//         });
//       } else {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       console.log(data.link);
//       writeFileLink(data);
//     })
//     .catch((error) => console.error("Error", error));
// }

function writeFileLink(link) {
  // console.log("The link is", link);
  const fileLink = document.getElementById("filelink");
  fileLink.href = link;
  fileLink.innerText = "'Right Click' then 'Copy Link'";
}

// ****** event listener *******
// fileInput.addEventListener("change", (event) => {
//   const files = event.target.files;
//   if (files.length > 0) {
//     upload(files[0]);
//   } else {
//     console.log("No file selected");
//   }
// });

/*
    Great question! While `fetch` is indeed asynchronous and returns a Promise, using `await` with `fetch` is part of the `async/await` syntax introduced in modern JavaScript to work with asynchronous code more conveniently. Let's dive into why and when you would use `await` with `fetch`.

### Why Use `await` with `fetch`?

1. **Simplicity and Readability**:
   - Using `await` makes your asynchronous code look and behave more like synchronous code. This can make it easier to read and understand, especially when dealing with multiple asynchronous operations.

2. **Error Handling**:
   - With `async/await`, you can use `try/catch` blocks to handle errors in a more straightforward and intuitive manner compared to `.then()` and `.catch()` methods.

3. **Sequential Operations**:
   - When you need to perform multiple asynchronous operations in sequence, `await` ensures that each operation completes before moving on to the next one.
    
*/

// ### When to Use `await` with `fetch`?

// You would use `await` inside an `async` function when you need to wait for the `fetch` call to complete before proceeding with the next lines of code.

// Here's an example using `await` with `fetch`:

// javascript;
async function upload(file) {
  const apiUrl = "https://file.io";
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    console.log(data);
    console.log(data.link);
    writeFileLink(data.link);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage: call the upload function when a file is selected
fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    upload(files[0]);
  } else {
    console.log("No file selected");
  }
});

// ### Breaking Down the Example:

// 1. **Declaring an Async Function**:
//    - The `upload` function is declared with the `async` keyword, enabling the use of `await` within it.

// 2. **Using `await` with `fetch`**:
//    - `await fetch(apiUrl, { method: "POST", body: formData })` waits for the `fetch` request to complete before moving on to the next line.

// 3. **Handling the Response**:
//    - `const data = await response.json()` waits for the response to be parsed as JSON.

// 4. **Error Handling**:
//    - The `try/catch` block handles any errors that might occur during the `fetch` request or the parsing of the response.

// Using `async/await` helps to write cleaner and more maintainable asynchronous code. It reduces the complexity of chaining multiple `.then()` methods and provides a synchronous flow for handling asynchronous operations.
