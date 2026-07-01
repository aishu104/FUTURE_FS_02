if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

let currentDate = new Date();

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  const monthYear = document.getElementById("monthYear");

  calendar.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.innerText = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  // empty slots
  for (let i = 0; i < firstDay; i++) {
    calendar.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${month + 1}-${day}`;

    const tasks = getTasks();
    const hasTask = tasks.some(t => t.due === dateStr);

    const today = new Date();
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    calendar.innerHTML += `
      <div class="day ${isToday ? "today" : ""} ${hasTask ? "has-task" : ""}"
           onclick="showTasks('${dateStr}')">
        ${day}
      </div>
    `;
  }
}

function showTasks(date) {
  const tasks = getTasks();
  const filtered = tasks.filter(t => t.due === date);

  const list = document.getElementById("dayTasks");
  list.innerHTML = `<h4>${date}</h4>`;

  if (filtered.length === 0) {
    list.innerHTML += "<li>No tasks</li>";
    return;
  }

  filtered.forEach(t => {
    list.innerHTML += `<li>${t.name} (${t.priority})</li>`;
  });
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
}

renderCalendar();
