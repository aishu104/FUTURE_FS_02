if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// RENDER TASKS
function renderTasks(data = tasks) {
  const table = document.getElementById("taskTable");
  table.innerHTML = "";

  data.forEach((t, index) => {
    table.innerHTML += `
      <tr>
        <td>${t.name}</td>
        <td>${t.priority}</td>
        <td>${t.status}</td>
        <td>${t.due}</td>
        <td>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

renderTasks();

// OPEN FORM
function openTaskForm() {
  document.getElementById("taskPopup").classList.remove("hidden");
}

// CLOSE FORM
function closeTaskForm() {
  document.getElementById("taskPopup").classList.add("hidden");

  document.getElementById("taskId").value = "";
  document.getElementById("tname").value = "";
  document.getElementById("tpriority").value = "Medium";
  document.getElementById("tstatus").value = "Pending";
  document.getElementById("tdue").value = "";
}

// SAVE TASK
function saveTask() {
  const id = document.getElementById("taskId").value;

  const task = {
    name: document.getElementById("tname").value,
    priority: document.getElementById("tpriority").value,
    status: document.getElementById("tstatus").value,
    due: document.getElementById("tdue").value
  };

  if (id === "") {
    tasks.push(task);
  } else {
    tasks[id] = task;
  }

  closeTaskForm();
  renderTasks();
}

// EDIT TASK
function editTask(index) {
  const t = tasks[index];

  document.getElementById("taskId").value = index;
  document.getElementById("tname").value = t.name;
  document.getElementById("tpriority").value = t.priority;
  document.getElementById("tstatus").value = t.status;
  document.getElementById("tdue").value = t.due;

  openTaskForm();
}

// DELETE TASK
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// SEARCH
document.getElementById("searchTasks").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = tasks.filter(t =>
    t.name.toLowerCase().includes(value) ||
    t.priority.toLowerCase().includes(value) ||
    t.status.toLowerCase().includes(value)
  );

  renderTasks(filtered);
});
