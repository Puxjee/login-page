const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("eye-icon");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const loginBtn = document.getElementById("login-btn");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.src = "eye-open.png";
  } else {
    passwordInput.type = "password";
    togglePassword.src = "eye.png";
  }
});

submitBtn.addEventListener("click", function () {
  if (emailInput.value === "") {
    emailInput.style.borderBottom = "3px solid red";
    alert("Email is required");
  } else {
    emailInput.style.borderBottom = "3px solid #5f7c8d";
  }

  if (passwordInput.value === "") {
    passwordInput.style.borderBottom = "3px solid red";
    alert("Password is required");
  } else {
    passwordInput.style.borderBottom = "3px solid #5f7c8d";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".btn button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("clicked");
    });
  });
  loginBtn.click();
});
