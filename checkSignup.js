const fullName = document.getElementById("fullName");
const email = document.querySelector("input[type=email]");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const btnSignup = document.querySelector(".signup-button");

btnSignup.onclick = function (e) {
  e.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  //Check validate email enter
  const isValidEmail = email.value.trim().match(regexEmail);
  if (!isValidEmail) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.com";
  }

  //Check validate password enter
  const isValidPassword = password.value.trim().match(regexPassword);
  if (!isValidPassword) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  }

  //Check validate password comparison
  const isSamePassword = password.value.trim() === confirmPassword.value.trim();
  if (!isSamePassword) {
    confirmPassword.parentElement.lastElementChild.classList.add("error");
    confirmPassword.parentElement.lastElementChild.textContent =
      "Hai password không trùng nhau, mời nhập lại!";
  }
  //Check full name length = 0
  if (!fullName.value.length) {
    fullName.parentElement.lastElementChild.classList.add("error");
    fullName.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô full name";
  }
  //Check email length =0
  if (!email.value.length) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô email";
  } else if (email.value.trim().match(regexEmail)) {
    email.parentElement.lastElementChild.classList.remove("error");
  }
  //Check password length = 0
  if (!password.value.length) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô password";
  } else if (password.value.trim().match(regexPassword)) {
    password.parentElement.lastElementChild.classList.remove("error");
  }
  //Check confirm password length = 0
  if (!confirmPassword.value.length) {
    confirmPassword.parentElement.lastElementChild.classList.add("error");
    confirmPassword.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô confirm password";
  } else if (passwordComparison) {
    confirmPassword.parentElement.lastElementChild.classList.remove("error");
  }
  //Regiter success
  if (emailCheck && passwordCheck && passwordComparison) {
    alert("Đăng ký thành công!");
  } else {
  }
};
