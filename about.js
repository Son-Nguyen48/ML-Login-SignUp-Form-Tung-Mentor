let storedArray = sessionStorage.getItem("userKey");

userArray = JSON.parse(storedArray);

console.log(userArray);

const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

if (userArray) {
  signupLink.style.display = "none";
  loginLink.style.display = "none";
}
