if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

let leads = JSON.parse(localStorage.getItem("leads")) || [];

// Load leads
function renderLeads() {
  const table = document.getElementById("leadTable");
  table.innerHTML = "";

  leads.forEach((lead, index) => {
    table.innerHTML += `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.phone}</td>
        <td>${lead.company}</td>
        <td>
          <button onclick="editLead(${index})">Edit</button>
          <button onclick="deleteLead(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("leads", JSON.stringify(leads));
}

renderLeads();

// Open form
function openForm() {
  document.getElementById("formPopup").classList.remove("hidden");
}

// Close form
function closeForm() {
  document.getElementById("formPopup").classList.add("hidden");

  document.getElementById("leadId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("company").value = "";
}

// Save lead
function saveLead() {
  const id = document.getElementById("leadId").value;

  const lead = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    company: document.getElementById("company").value
  };

  if (id === "") {
    leads.push(lead);
  } else {
    leads[id] = lead;
  }

  closeForm();
  renderLeads();
}

// Edit lead
function editLead(index) {
  const lead = leads[index];

  document.getElementById("leadId").value = index;
  document.getElementById("name").value = lead.name;
  document.getElementById("email").value = lead.email;
  document.getElementById("phone").value = lead.phone;
  document.getElementById("company").value = lead.company;

  openForm();
}

// Delete lead
function deleteLead(index) {
  leads.splice(index, 1);
  renderLeads();
}

// Search
document.getElementById("search").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = leads.filter(l =>
    l.name.toLowerCase().includes(value) ||
    l.email.toLowerCase().includes(value) ||
    l.company.toLowerCase().includes(value)
  );

  const table = document.getElementById("leadTable");
  table.innerHTML = "";

  filtered.forEach((lead, index) => {
    table.innerHTML += `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.phone}</td>
        <td>${lead.company}</td>
        <td>
          <button onclick="editLead(${index})">Edit</button>
          <button onclick="deleteLead(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
});
