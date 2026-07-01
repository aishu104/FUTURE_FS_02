(function () {
  if (!localStorage.getItem("nexuscrm_initialized")) {

    // Demo user
    localStorage.setItem("nexuscrm_user", JSON.stringify({
      username: "nexuscrm",
      password: "nexus1313"
    }));

    // Leads
    localStorage.setItem("leads", JSON.stringify([
      { name: "John Doe", email: "john@test.com", phone: "9999999999", company: "ABC Corp" },
      { name: "Sara Khan", email: "sara@test.com", phone: "8888888888", company: "TechSoft" }
    ]));

    // Contacts
    localStorage.setItem("contacts", JSON.stringify([
      { name: "Amit Sharma", email: "amit@test.com", phone: "7777777777", company: "Infosys" }
    ]));

    // Deals
    localStorage.setItem("deals", JSON.stringify([
      { name: "Website Build", value: 5000, stage: "New", owner: "nexuscrm" },
      { name: "App Development", value: 12000, stage: "In Progress", owner: "nexuscrm" }
    ]));

    // Tasks
    localStorage.setItem("tasks", JSON.stringify([
      { name: "Call Client", priority: "High", status: "Pending", due: "2026-01-10" },
      { name: "Send Proposal", priority: "Medium", status: "Completed", due: "2026-01-05" }
    ]));

    localStorage.setItem("nexuscrm_initialized", "true");
  }
})();
