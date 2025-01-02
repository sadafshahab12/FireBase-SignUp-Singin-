let eyeBtn1 = document.querySelector(".eye-btn");
let eyeBtn1Icon = document.querySelector(".eye-btn i");
let eyeBtn2 = document.querySelector(".confirm-eye-btn");
let eyeBtn2Icon = document.querySelector(".confirm-eye-btn i");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm-password");

eyeBtn1.addEventListener("click", () => {
  if (eyeBtn1Icon.classList.contains("fa-eye-slash")) {
    eyeBtn1Icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    eyeBtn1Icon.classList.replace("fa-eye", "fa-eye-slash");
  }
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

eyeBtn2.addEventListener("click", () => {
  if (eyeBtn2Icon.classList.contains("fa-eye-slash")) {
    eyeBtn2Icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    eyeBtn2Icon.classList.replace("fa-eye", "fa-eye-slash");
  }

  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
});
