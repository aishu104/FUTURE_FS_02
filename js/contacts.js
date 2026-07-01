document.addEventListener("DOMContentLoaded", function () {
if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Render contacts
function renderContacts(data = contacts) {
  const table = document.getElementById("contactTable");
  table.innerHTML = "";

  data.forEach((c, index) => {
    table.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.phone}</td>
        <td>${c.company}</td>
        <td>
          <button onclick="editContact(${index})">Edit</button>
          <button onclick="deleteContact(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));
}

renderContacts();

// OPEN FORM
function openContactForm() {
  document.getElementById("contactPopup").classList.remove("hidden");
}

// CLOSE FORM
function closeContactForm() {
  document.getElementById("contactPopup").classList.add("hidden");

  document.getElementById("contactId").value = "";
  document.getElementById("cname").value = "";
  document.getElementById("cemail").value = "";
  document.getElementById("cphone").value = "";
  document.getElementById("ccompany").value = "";
}

// SAVE CONTACT
function saveContact() {
  const id = document.getElementById("contactId").value;

  const contact = {
    name: document.getElementById("cname").value,
    email: document.getElementById("cemail").value,
    phone: document.getElementById("cphone").value,
    company: document.getElementById("ccompany").value
  };

  if (id === "") {
    contacts.push(contact);
  } else {
    contacts[id] = contact;
  }

  closeContactForm();
  renderContacts();
}

// EDIT
function editContact(index) {
  const c = contacts[index];

  document.getElementById("contactId").value = index;
  document.getElementById("cname").value = c.name;
  document.getElementById("cemail").value = c.email;
  document.getElementById("cphone").value = c.phone;
  document.getElementById("ccompany").value = c.company;

  openContactForm();
}

// DELETE
function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

// SEARCH
document.getElementById("searchContacts").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(value) ||
    c.email.toLowerCase().includes(value) ||
    c.company.toLowerCase().includes(value)
  );

  renderContacts(filtered);
});
});
