const email = document.querySelector("input[type=email]");

const btnLogin = document.querySelector(".login-button");

const password = document.querySelector("input[type=password]");

// const label = document.querySelector("#input-task + label");
// console.log(label);

btnLogin.onclick = function (e) {
  e.preventDefault();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  //Check validate email enter
  const isValidEmail = email.value.trim().match(regexEmail);
  if (!isValidEmail) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Mời nhập email theo đúng định dạng abc@abc.abc";
  }
  //Check validate password enter
  const isValidPassword = password.value.trim().match(regexPassword);
  if (!isValidPassword) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Mời nhập password theo đúng định dạng: Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa,chữ cái viết thường, ký tự đặc biệt!";
  } else if (password.value.trim().match(regexPassword)) {
    password.parentElement.lastElementChild.classList.remove("error");
  }
  //Check validate password length = 0
  if (!password.value.length) {
    password.parentElement.lastElementChild.classList.add("error");
    password.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô password";
  }
  //Check validate email length = 0
  if (!email.value.length) {
    email.parentElement.lastElementChild.classList.add("error");
    email.parentElement.lastElementChild.textContent =
      "Không được bỏ trống ô email";
  } else if (email.value.trim().match(regexEmail)) {
    email.parentElement.lastElementChild.classList.remove("error");
  }

  //Login success
  if (isValidEmail && isValidPassword) {
    alert("Đăng nhập thành công!");
  }
};
