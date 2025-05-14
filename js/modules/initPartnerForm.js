export function initPartnerForm() {
  const form = document.getElementById("sign-up-partner-form");
  if (!form) return;

  const usernameInput = document.getElementById("partner-username");
  const emailInput = document.getElementById("partner-email");
  const passwordInput = document.getElementById("partner-password");

  const usernameError = document.getElementById("partner-username-error");
  const emailError = document.getElementById("partner-email-error");
  const passwordError = document.getElementById("partner-password-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const username = usernameInput.value.trim();
    if (!/^[a-zA-Z0-9]{4,}$/.test(username)) {
      usernameError.textContent =
        "Username must be at least 4 characters and contain only letters or numbers.";
      usernameInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      usernameError.textContent = "";
      usernameInput.setAttribute("aria-invalid", "false");
    }

    const email = emailInput.value.trim();
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      emailError.textContent = "";
      emailInput.setAttribute("aria-invalid", "false");
    }

    const password = passwordInput.value.trim();
    if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password)) {
      passwordError.textContent =
        "Password must be at least 6 characters and contain both letters and numbers.";
      passwordInput.setAttribute("aria-invalid", "true");
      isValid = false;
    } else {
      passwordError.textContent = "";
      passwordInput.setAttribute("aria-invalid", "false");
    }

    if (isValid) {
      // ✅ 分開儲存到另一個 key
      localStorage.setItem("signedUpPartner", JSON.stringify({
        username,
        email,
        password
      }));

      alert("Partner sign-up successful!");
      form.reset();
      window.location.href = "resteraunt.html";
    }
  });
}