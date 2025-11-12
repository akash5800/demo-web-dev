let expenses = [];

function addExpense() {
  let name = document.getElementById("name").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  if (!name || !amount || !date) {
    alert("Please fill in Name, Amount, and Date");
    return;
  }

  expenses.push({ name, amount, description, date });
  renderTable();
  clearForm();
}

function renderTable() {
  let tbody = document.querySelector("#expenseTable tbody");
  tbody.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;
    let row = `<tr>
      <td>${exp.name}</td>
      <td>₹${exp.amount.toFixed(2)}</td>
      <td>${exp.description}</td>
      <td>${exp.date}</td>
      <td><button onclick="deleteExpense(${index})" style="background:red;">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderTable();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
}

function filterTable() {
  let searchName = document.getElementById("searchName").value.toLowerCase();
  let searchDate = document.getElementById("searchDate").value;

  let tbody = document.querySelector("#expenseTable tbody");
  tbody.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    if ((searchName === "" || exp.name.toLowerCase().includes(searchName)) &&
        (searchDate === "" || exp.date === searchDate)) {
      total += exp.amount;
      let row = `<tr>
        <td>${exp.name}</td>
        <td>₹${exp.amount.toFixed(2)}</td>
        <td>${exp.description}</td>
        <td>${exp.date}</td>
        <td><button onclick="deleteExpense(${index})" style="background:red;">Delete</button></td>
      </tr>`;
      tbody.innerHTML += row;
    }
  });

  document.getElementById("total").innerText = total.toFixed(2);
}
