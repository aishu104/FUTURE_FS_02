if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

// LOAD USER INFO
const user = JSON.parse(localStorage.getItem("nexuscrm_user"));
document.getElementById("userInfo").innerText =
  `Logged in as: ${user.username}`;

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// APPLY SAVED THEME
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// RESET DEMO DATA
function resetDemo() {
  localStorage.setItem("leads", JSON.stringify([
    { name: "John Doe", email: "john@test.com", phone: "9999999999", company: "ABC Corp" }
  ]));

  localStorage.setItem("contacts", JSON.stringify([
    { name: "Jane Smith", email: "jane@test.com", phone: "8888888888", company: "XYZ Ltd" }
  ]));

  localStorage.setItem("deals", JSON.stringify([
    { name: "Website Project", value: 5000, stage: "New", owner: "Admin" }
  ]));

  localStorage.setItem("tasks", JSON.stringify([
    { name: "Call Client", priority: "High", status: "Pending", due: "2026-01-01" }
  ]));

  alert("Demo data reset!");
}

// CLEAR ALL DATA
function clearAll() {
  localStorage.clear();
  alert("All data cleared!");
  window.location.href = "index.html";
}
