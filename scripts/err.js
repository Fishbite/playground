console.log("Error handling...");

// try {
//   alert("Start of try runs");

//   alert("try block running");

//   alert("End of try runs. All OK");
// } catch (err) {
//   console.log(`There was an error: ${err}`);
// }

// for built in errors,the `error` object has two properties:
// `name` & `message` plus
// try {
//   alert("checking `this` on variable 'test'");
//   test.this; // variable doesn't exist
// } catch (err) {
//   // show the error as a whole:
//   alert(`Damn it error: ${err}`); // ReferenceError: test is not defined
//   console.log("you gonna have to fix `test`");
// }

// or you can log individual properties:
try {
  let ok = "ok";
  console.log("checking variables `ok` & `arse`");

  console.log(ok); // no error thrown
  console.log(arse); // error thrown, stop try run
} catch (err) {
  console.log("Start of catch block, error details below...");
  console.log(`error name: ${err.name}
error message: ${err.message}
error stack: ${err.stack}`); // doesn't seem to work...
  // Current call stack: a string with information about the
  // sequence of nested calls that led to the error. Used for
  // debugging purposes.
  console.log("End of catch block");
}

// a real life situation
srvData = '{"name":"John", "age": 30}'; // data from the server. Good JSON data
let user = JSON.parse(srvData); // convert JSON data to JS Object
console.log(user); // Object { name: "John", age: 30 }
try {
  console.log("Start of `try` block");
  console.log(user.role); // undefined, no error thrown because `user` exists
  console.log("End of `try` block");
} catch (err) {
  console.log("Start of catch block");

  console.log(err);

  console.log("End of catch block");
}

// use `throw`
srvData = '{"name":"John", "age": 30}'; // data from the server. Good JSON data
user = JSON.parse(srvData);
// use `throw` to define custom errors. i.e. check `user.role` exists
try {
  if (!user.role) {
    throw new Error("WTF? No 'user.role' in the data", {
      cause: "some muppet didn't give the fucker a job",
    }); // custom error with message
  }
} catch (err) {
  console.log(`Oops! o^O`);
  console.log(`name: ${err.name}
message: ${err.message}
cause: ${err.cause}`);
}
