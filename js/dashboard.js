document.addEventListener("DOMContentLoaded", function () {
if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

// Logout
function logout() {
  localStorage.removeItem("nexuscrm_user");
  window.location.href = "index.html";
}

// Load dummy data if not exists
if (!localStorage.getItem("leads")) {
  localStorage.setItem("leads", JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }]));
}
if (!localStorage.getItem("contacts")) {
  localStorage.setItem("contacts", JSON.stringify([{ id: 1 }, { id: 2 }]));
}
if (!localStorage.getItem("deals")) {
  localStorage.setItem("deals", JSON.stringify([{ id: 1 }]));
}
if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));
}

// Update counts
document.getElementById("leadsCount").innerText =
  JSON.parse(localStorage.getItem("leads")).length;

document.getElementById("contactsCount").innerText =
  JSON.parse(localStorage.getItem("contacts")).length;

document.getElementById("dealsCount").innerText =
  JSON.parse(localStorage.getItem("deals")).length;

document.getElementById("tasksCount").innerText =
  JSON.parse(localStorage.getItem("tasks")).length;
});
