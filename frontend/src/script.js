// frontend/script.js

// delete all records via backendapi
async function deleteAllData() {
  try {
      const response = await fetch('/api/deleteAllStocks', {
          method: 'DELETE'
      });
      const result = await response.json();
      console.log(result.message);
      renderTable(); // Re-render the table after deletion
  } catch (error) {
      console.error('Error deleting data', error);
  }
}

// frontend delete button
const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', deleteAllData);

// get all records via backendapi
async function getStocks() {
  try {
      const response = await fetch('/api/getSortedStocks'); // Replace with your actual backend URL
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data', error);
      return [];
  }
}


async function renderTable() {
  console.log('rendering table...')
  const data = await getStocks();
  console.log(data);

  // Clear existing table rows (optional)
  const table = document.getElementById('stockTable');
  table.innerHTML = ''; // Clear existing content

  // Create table headers based on the first data object's properties
  const tableHeaders = document.createElement('tr');
  
  if (data && data.length > 0) {
    for (const key in data[0]) {
      if(key === '_id') continue;
      console.log("Column Name: ", key);
      const th = document.createElement('th');
      console.log(th);
      th.textContent = key; // Use the property name as the header text
      tableHeaders.appendChild(th);
    }
    table.appendChild(tableHeaders);

    // Loop through the data and create table rows
    data.forEach((item) => {
      const row = document.createElement('tr');
      for (const key in item) {
        if(key === '_id') continue;
        const cell = document.createElement('td');
        cell.textContent = item[key]; // Use the property value as the cell content
        row.appendChild(cell);
      }
      table.appendChild(row);
    });
      console.log('table rendered.');
  } else {
     // Handle case where data is null or empty
     const messageRow = table.insertRow();
     const messageCell = messageRow.insertCell();
     messageCell.colSpan = 2;
     messageCell.textContent = 'No data available.';
  };
}

renderTable();
