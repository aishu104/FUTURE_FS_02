document.addEventListener("DOMContentLoaded", function () {
if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const demoUser = {
    username: "nexuscrm",
    password: "nexus1313"
  };

  if (username === demoUser.username && password === demoUser.password) {
    localStorage.setItem("nexuscrm_user", JSON.stringify(demoUser));
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid credentials!";
  }
});

// Auto redirect if already logged in
if (localStorage.getItem("nexuscrm_user")) {
  window.location.href = "dashboard.html";
}
});
