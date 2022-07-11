const email = document.getElementById("email");

const btnLogin = document.querySelector(".login-button");

const password = document.getElementById("password");

// const label = document.querySelector("#input-task + label");
// console.log(label);

email.onkeyup = function (e) {
  e.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailErrorNode = email.parentElement.lastElementChild;
  const emailValue = email.value.trim();
  const isValidEmail = emailValue.match(regexEmail);
  if (!isValidEmail && emailValue) {
    emailErrorNode.classList.add("error");
    emailErrorNode.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.abc";
  } else if (emailValue.match(regexEmail) || emailValue) {
    emailErrorNode.classList.remove("error");
  }
};

password.onkeyup = function (e) {
  e.preventDefault();
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  const passwordErrorNode = password.parentElement.lastElementChild;
  const passwordValue = password.value.trim();
  const isValidPassword = passwordValue.match(regexPassword);
  if (!isValidPassword && passwordValue) {
    passwordErrorNode.classList.add("error");
    passwordErrorNode.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  } else if (passwordValue.match(regexPassword) || passwordValue) {
    passwordErrorNode.classList.remove("error");
  }
};

btnLogin.onclick = function (e) {
  e.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
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
    alert("Đăng nhập thành công!");
  }
};
