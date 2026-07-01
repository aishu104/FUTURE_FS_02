if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

const leads = JSON.parse(localStorage.getItem("leads")) || [];
const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const deals = JSON.parse(localStorage.getItem("deals")) || [];
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// DEAL STATUS COUNT
const dealStages = {
  New: 0,
  "In Progress": 0,
  Won: 0,
  Lost: 0
};

deals.forEach(d => dealStages[d.stage]++);

// TASK STATUS COUNT
const taskStatus = {
  Pending: 0,
  Completed: 0
};

tasks.forEach(t => taskStatus[t.status]++);

// CHART 1 - Leads vs Contacts
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["Leads", "Contacts"],
    datasets: [{
      label: "Count",
      data: [leads.length, contacts.length],
      backgroundColor: ["#4f46e5", "#06b6d4"]
    }]
  }
});

// CHART 2 - Deals
new Chart(document.getElementById("chart2"), {
  type: "pie",
  data: {
    labels: Object.keys(dealStages),
    datasets: [{
      data: Object.values(dealStages),
      backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#ef4444"]
    }]
  }
});

// CHART 3 - Tasks
new Chart(document.getElementById("chart3"), {
  type: "doughnut",
  data: {
    labels: Object.keys(taskStatus),
    datasets: [{
      data: Object.values(taskStatus),
      backgroundColor: ["#f59e0b", "#10b981"]
    }]
  }
});
