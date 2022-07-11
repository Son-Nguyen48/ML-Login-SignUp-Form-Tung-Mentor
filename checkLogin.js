const email = document.querySelector("input[type=email]");

const btnLogin = document.querySelector(".login-button");

const password = document.querySelector("input[type=password]");

const label = document.querySelector("#input-task + label");
console.log(label);

btnLogin.onclick = function (e) {
  e.preventDefault();
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  //Check validate email enter
  if (!email.value.trim().match(regexEmail)) {
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
  //Check validate password length = 0
  if (password.value.length === 0) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô password";
  }
  //Check validate email length = 0
  if (email.value.length === 0) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô email";
  } else if (email.value.trim().match(regexEmail)) {
    email.parentElement.lastElementChild.classList.remove("error");
  }
};
