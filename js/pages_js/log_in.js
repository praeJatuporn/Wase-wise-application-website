import { checkLogin } from "../modules/login_into.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");

  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("login-password-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    if (!email.includes("@")) {
      emailError.textContent = "Please enter a valid email.";
      emailInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      emailError.textContent = "";
      emailInput.setAttribute("aria-invalid", "false");
    }

    if (!password) {
      passwordError.textContent = "Please enter your password.";
      passwordInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      passwordError.textContent = "";
      passwordInput.setAttribute("aria-invalid", "false");
    }

    if (!isValid) return;

    const result = checkLogin(email, password);

    if (!result.success) {
      alert(result.message);
    } else {
      alert(`Welcome back, ${result.username}!`);
      window.location.href = "index.html"; // ✅ 登入後導向
    }
  });
});