export function checkLogin(email, password) {
  const storedData = JSON.parse(localStorage.getItem("signedUpUser"));

  if (!storedData) {
    return { success: false, message: "No user registered." };
  }

  if (storedData.email !== email || storedData.password !== password) {
    return { success: false, message: "Incorrect email or password." };
  }

  return { success: true, username: storedData.username };

}