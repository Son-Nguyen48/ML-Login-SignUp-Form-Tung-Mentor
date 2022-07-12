const email = document.getElementById("email");

const btnLogin = document.querySelector(".login-button");

const password = document.getElementById("password");

//Show error when key change
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

function getFunctionEvent(input, regex, error) {
  return function () {
    const inputErrorNode = input.parentElement.lastElementChild;
    const inputValue = input.value.trim();
    const isValidInput = inputValue.match(regex);
    if (!isValidInput && inputValue) {
      inputErrorNode.classList.add("error");
      inputErrorNode.textContent = error;
    } else if (isValidInput || inputValue) {
      inputErrorNode.classList.remove("error");
    }
  };
}

const emailErrorMessage = "Mời nhập email theo đúng định dạng abc@abc.abc";
email.onkeyup = getFunctionEvent(email, regexEmail, emailErrorMessage);
const passwordErrorMessage =
  "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
password.onkeyup = getFunctionEvent(
  password,
  regexPassword,
  passwordErrorMessage
);
//Show error when click button

btnLogin.onclick = function (e) {
  e.preventDefault();
  const emailErrorNode = email.parentElement.lastElementChild;
  const passwordErrorNode = password.parentElement.lastElementChild;
  //Check validate email enter
  const emailValue = email.value.trim();
  const isValidEmail = emailValue.match(regexEmail);
  if (!isValidEmail) {
    emailErrorNode.classList.add("error");
    emailErrorNode.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.abc";
  }
  //Check validate password enter
  const passwordValue = password.value.trim();
  const isValidPassword = passwordValue.match(regexPassword);
  if (!isValidPassword) {
    passwordErrorNode.classList.add("error");
    passwordErrorNode.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  } else if (passwordValue.match(regexPassword)) {
    passwordErrorNode.classList.remove("error");
  }
  //Check validate password length = 0
  if (!passwordValue) {
    passwordErrorNode.classList.add("error");
    passwordErrorNode.textContent = "Không được bỏ trống ô password";
  }
  //Check validate email length = 0
  if (!emailValue) {
    emailErrorNode.classList.add("error");
    emailErrorNode.textContent = "Không được bỏ trống ô email";
  } else if (emailValue.match(regexEmail)) {
    emailErrorNode.classList.remove("error");
  }

  //Login success
  if (isValidEmail && isValidPassword) {
    let userArray = [
      { id: 1, email: emailValue, password: passwordValue },
      { id: 2, email: emailValue, password: passwordValue }
    ];
    console.log("go here");
    sessionStorage.setItem("userKey", JSON.stringify(userArray));
    console.log("go here");
    location.href = "homepage.html";
  }
};

//Stop browser back button
function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = function () {
  null;
};

//Save email and password to sessionStorage
let storedArray = sessionStorage.getItem("userKey");

userArray = JSON.parse(storedArray);

console.log(userArray);

const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

if (userArray) {
  window.location = "homepage.html";
}
