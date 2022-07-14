const email = document.getElementById("email");

const btnLogin = document.querySelector(".login-button");

const password = document.getElementById("password");

//1. Show error when key change
/**--------------------------------------------------- */

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

//2. Show error when click button
/**--------------------------------------------------- */

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
    const users = JSON.parse(localStorage.getItem("usersSignup")) ?? [];
    let user = {
      email: emailValue,
      password: passwordValue
    };
    //Check if user include in usersSignup
    const isValidUser = users.some(function (user) {
      return user.email === emailValue && user.password === passwordValue;
    });

    if (isValidUser) {
      //Save email, password in localStorage "userLogged" if user include in "usersSignup"
      //and navigate to homepage.html
      localStorage.setItem("userLogged", JSON.stringify(user));
      window.location = "homepage.html";
    } else {
      //Show error if user isn't include in "userSignup"
      const btnLoginErrorNode = btnLogin.parentElement.lastElementChild;
      console.log(btnLoginErrorNode);
      btnLoginErrorNode.classList.add("error");
      btnLoginErrorNode.textContent = "Nhập sai email, password! Mời nhập lại";
    }
  }
};

//3. Stop browser back button
function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = function () {
  null;
};

//4. navigate to home page if logged
let userLogged = JSON.parse(localStorage.getItem("userLogged")) ?? [];

const signupLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

if (userLogged.email) {
  window.location = "homepage.html";
}
