if (!localStorage.getItem("nexuscrm_user")) {
  window.location.href = "index.html";
}

let deals = JSON.parse(localStorage.getItem("deals")) || [];

// RENDER DEALS
function renderDeals(data = deals) {
  const table = document.getElementById("dealTable");
  table.innerHTML = "";

  data.forEach((d, index) => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>$${d.value}</td>
        <td>${d.stage}</td>
        <td>${d.owner}</td>
        <td>
          <button onclick="editDeal(${index})">Edit</button>
          <button onclick="deleteDeal(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("deals", JSON.stringify(deals));
}

renderDeals();

// OPEN FORM
function openDealForm() {
  document.getElementById("dealPopup").classList.remove("hidden");
}

// CLOSE FORM
function closeDealForm() {
  document.getElementById("dealPopup").classList.add("hidden");

  document.getElementById("dealId").value = "";
  document.getElementById("dname").value = "";
  document.getElementById("dvalue").value = "";
  document.getElementById("dstage").value = "New";
  document.getElementById("downer").value = "";
}

// SAVE DEAL
function saveDeal() {
  const id = document.getElementById("dealId").value;

  const deal = {
    name: document.getElementById("dname").value,
    value: document.getElementById("dvalue").value,
    stage: document.getElementById("dstage").value,
    owner: document.getElementById("downer").value
  };

  if (id === "") {
    deals.push(deal);
  } else {
    deals[id] = deal;
  }

  closeDealForm();
  renderDeals();
}

// EDIT DEAL
function editDeal(index) {
  const d = deals[index];

  document.getElementById("dealId").value = index;
  document.getElementById("dname").value = d.name;
  document.getElementById("dvalue").value = d.value;
  document.getElementById("dstage").value = d.stage;
  document.getElementById("downer").value = d.owner;

  openDealForm();
}

// DELETE DEAL
function deleteDeal(index) {
  deals.splice(index, 1);
  renderDeals();
}

// SEARCH
document.getElementById("searchDeals").addEventListener("input", function(e) {
  const value = e.target.value.toLowerCase();

  const filtered = deals.filter(d =>
    d.name.toLowerCase().includes(value) ||
    d.owner.toLowerCase().includes(value) ||
    d.stage.toLowerCase().includes(value)
  );

  renderDeals(filtered);
});
