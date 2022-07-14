let userLogged = JSON.parse(localStorage.getItem("userLogged")) ?? [];
console.log(userLogged.email);

const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");
const logoutLink = document.querySelector(".logout-link");
const homePageLink = document.querySelector(".homepage-link");

//1. Hide link navigate to login and sign up page if user logged
if (userLogged.email) {
  signupLink.style.display = "none";
  loginLink.style.display = "none";
  logoutLink.style.display = "block";
  homePageLink.style.display = "block";
} else {
  signupLink.style.display = "block";
  logoutLink.style.display = "none";
  loginLink.style.display = "block";
  homePageLink.style.display = "none";
}

/*----------------------------------------------------------- */
//2. Logout

logoutLink.onclick = function (e) {
  localStorage.setItem("userLogged", JSON.stringify({}));
  window.location = "about.html";
};
