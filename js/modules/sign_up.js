export function initUserForm() {
    const form = document.getElementById("sign-up-form");
    if (!form) return;

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        // --- Username 驗證 ---
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

        // --- Email 驗證 ---
        const email = emailInput.value.trim();
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.setAttribute("aria-invalid", "true");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailInput.setAttribute("aria-invalid", "false");
        }

        // --- Password 驗證 ---
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

        // --- 所有欄位通過 ---
        if (isValid) {
            localStorage.setItem(
                "signedUpUser",
                JSON.stringify({
                    username,
                    email,
                    password,
                })
            );
            alert("Sign up successful!");
            console.log("User signed up:", { username, email, password });
            form.reset();

            // Reset aria-invalid
            usernameInput.setAttribute("aria-invalid", "false");
            emailInput.setAttribute("aria-invalid", "false");
            passwordInput.setAttribute("aria-invalid", "false");

            window.location.href = "index.html";
        }
    });
}
