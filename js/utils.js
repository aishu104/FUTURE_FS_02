if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
