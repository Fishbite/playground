console.log("Working With Form Data");

// formElem.onsubmit = async (e) => {
//   e.preventDefault();

//   let response = await fetch("/article/formdata/post/user", {
//     method: "POST",
//     body: new FormData(formElem),
//   });

//   let result = await response.json();

//   alert(result.message);
// };

document.getElementById("app").innerHTML = `
<h1>File Upload & FormData Example</h1>
<div>
<input type="file" id="fileInput" />
</div>
`;

const fileInput = document.querySelector("#fileInput");

const uploadFile = (file) => {
  console.log("Uploading file...");
  const API_ENDPOINT = "https://file.io";
  const request = new XMLHttpRequest();
  const formData = new FormData();

  request.open("POST", API_ENDPOINT, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let response = request.responseText;
      console.log(response);

      if (response) {
        console.log("got response");
        console.log(response.includes("link"));

        let responseArr = request.responseText.split(",");

        let linkIndex = responseArr.indexOf("link");
        console.log(responseArr);

        let tempLink = responseArr[10].split(":");
        let link = tempLink[1] + ":" + tempLink[2];
        console.log(link);

        let fileLink = document.getElementById("filelink");
        fileLink.href = link.slice(1, link.length - 1);
        console.log(fileLink.href);
        fileLink.innerText = "Get Your File From Here";
      } else {
        console.log("no response yet");
      }
    }
  };
  formData.append("file", file);
  request.send(formData);
};

fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  uploadFile(files[0]);
});
