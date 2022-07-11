const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const btnSignup = document.querySelector(".signup-button");

btnSignup.onclick = function (e) {
  e.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

  const emailErrorNode = email.parentElement.lastElementChild;
  const passwordErrorNode = password.parentElement.lastElementChild;
  const fullNameErrorNode = fullName.parentElement.lastElementChild;
  const confirmPasswordErrorNode =
    confirmPassword.parentElement.lastElementChild;
  //Check validate email enter
  const emailValue = email.value.trim();
  const isValidEmail = emailValue.match(regexEmail);
  if (!isValidEmail) {
    emailErrorNode.classList.add("error");
    emailErrorNode.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.com";
  }

  //Check validate password enter
  passwordValue = password.value.trim();
  const isValidPassword = passwordValue.match(regexPassword);
  if (!isValidPassword) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  }

  //Check validate password comparison
  const confirmPasswordValue = confirmPassword.value.trim();
  const isSamePassword = passwordValue === confirmPasswordValue;
  if (!isSamePassword) {
    confirmPasswordErrorNode.classList.add("error");
    confirmPasswordErrorNode.textContent =
      "Hai password không trùng nhau, mời nhập lại!";
  }
  //Check full name length = 0
  const fullNameValue = fullName.value.trim();
  if (!fullNameValue) {
    fullNameErrorNode.classList.add("error");
    fullNameErrorNode.textContent = "Không được bỏ trống ô full name";
  }
  //Check email length =0
  if (!emailValue) {
    emailErrorNode.classList.add("error");
    emailErrorNode.textContent = "Không được bỏ trống ô email";
  } else if (emailValue.match(regexEmail)) {
    emailErrorNode.classList.remove("error");
  }
  //Check password length = 0
  if (!passwordValue) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô password";
  } else if (passwordValue.match(regexPassword)) {
    password.parentElement.lastElementChild.classList.remove("error");
  }
  //Check confirm password length = 0
  if (!confirmPasswordValue) {
    confirmPasswordErrorNode.classList.add("error");
    confirmPasswordErrorNode.textContent =
      "Không được bỏ trống ô confirm password";
  } else if (isSamePassword) {
    confirmPasswordErrorNode.classList.remove("error");
  }
  //Regiter success
  if (isValidEmail && isValidPassword && isSamePassword) {
    alert("Đăng ký thành công!");
  }
};
