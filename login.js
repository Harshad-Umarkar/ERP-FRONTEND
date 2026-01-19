let show = document.querySelector("#show");
let eye = document.querySelector("#eye");
let password = document.querySelector("#password");
let id = document.querySelector(".username>input");
let pass = document.querySelector(".password>input");

show.addEventListener("click", () => {
  if (eye.getAttribute("src") == "hidden.png") {
    eye.setAttribute("src", "eye.png");
    password.setAttribute("type", "text");
  } else {
    if (eye.getAttribute("src") == "eye.png") {
      eye.setAttribute("src", "hidden.png");
      password.setAttribute("type", "password");
    }
  }
});
id.addEventListener("focus", () => {
  document
    .querySelector(".username>label")
    .setAttribute("style", "left:-6rem;top:-3.5rem");
});
pass.addEventListener("focus", () => {
  console.log(pass);
});
document.querySelector("#check").addEventListener("click", () => {
  let email = id.value;
  let password = pass.value;
  console.log(email, password);
  fetch("https://harshgumarkar.pythonanywhere.com/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
