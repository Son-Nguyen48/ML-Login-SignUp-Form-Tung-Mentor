const fullName = document.querySelector("input[type=text]");
const email = document.querySelector("input[type=email]");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const btnSignup = document.querySelector(".signup-button");

btnSignup.onclick = function (e) {
  e.preventDefault();
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  //Check validate email enter
  let emailCheck = email.value.trim().match(regexEmail);
  if (!emailCheck) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.com";
  }

  //Check validate password enter
  let passwordCheck = password.value.trim().match(regexPassword);
  if (!passwordCheck) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  }

  //Check validate password comparison
  let passwordComparison =
    password.value.trim() === confirmPassword.value.trim();
  if (!passwordComparison) {
    confirmPassword.parentElement.lastElementChild.classList.add("error");
    confirmPassword.parentElement.lastElementChild.textContent =
      "Hai password không trùng nhau, mời nhập lại!";
  }
  //Check full name length = 0
  if (fullName.value.length === 0) {
    fullName.parentElement.lastElementChild.classList.add("error");
    fullName.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô full name";
  }
  //Check email length =0
  if (email.value.length === 0) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô email";
  } else if (email.value.trim().match(regexEmail)) {
    email.parentElement.lastElementChild.classList.remove("error");
  }
  //Check password length = 0
  if (password.value.length === 0) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô password";
  } else if (password.value.trim().match(regexPassword)) {
    password.parentElement.lastElementChild.classList.remove("error");
  }
  //Check confirm password length = 0
  if (confirmPassword.value.length === 0) {
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
