const userLogged = JSON.parse(localStorage.getItem("userLogged")) ?? [];
if (!userLogged.email) {
  window.location = "index.html";
}
//Logout link
const logoutLink = document.querySelector(".logout-link");

logoutLink.onclick = function (e) {
  localStorage.setItem("userLogged", JSON.stringify({}));
  window.location = "index.html";
};
