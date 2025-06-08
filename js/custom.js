// js/custom.js
const form = document.getElementById('crudForm');
const table = document.querySelector('#accidentTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const crashDate = document.getElementById('crashDate').value;
  const borough = document.getElementById('borough').value;
  const injured = document.getElementById('injured').value;
  const killed = document.getElementById('killed').value;
  const cause = document.getElementById('cause').value;

  const row = table.insertRow();
  row.innerHTML = `
    <td>${crashDate}</td>
    <td>${borough}</td>
    <td>${injured}</td>
    <td>${killed}</td>
    <td>${cause}</td>
    <td>
      <button onclick="editRow(this)">Update</button>
      <button onclick="deleteRow(this)">Delete</button>
    </td>
  `;

  form.reset();
});

function deleteRow(btn) {
  btn.closest('tr').remove();
}

function editRow(btn) {
  const cells = btn.closest('tr').children;
  document.getElementById('crashDate').value = cells[0].textContent;
  document.getElementById('borough').value = cells[1].textContent;
  document.getElementById('injured').value = cells[2].textContent;
  document.getElementById('killed').value = cells[3].textContent;
  document.getElementById('cause').value = cells[4].textContent;
  btn.closest('tr').remove();
}
