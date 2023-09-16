// Install the Sheetrock.js library
const Sheetrock = require('sheetrock');

// Create a new Sheetrock object
const sheetrock = new Sheetrock({
  spreadsheetId: '1UsgZQY_S36ZuOTCW8hG-p05q2wlzcykAFRF-Ntjf0uU',
});

// Define your inverter names and corresponding HTML element IDs
const inverters = [
  { name: 'SUNSYNK', field: 'field1', updateTimeId: 'updateTime1' },
  { name: 'DEYE', field: 'field4', updateTimeId: 'updateTime2' },
  { name: 'SOLARMAN', field: 'field7', updateTimeId: 'updateTime3' }
];

// Update the inverter data
async function updateInverterData() {
  try {
    // Read the data from the Google Sheet
    const values = await sheetrock.get('Sheet1');

    // Update the HTML elements with data
    for (const inverter of inverters) {
      const updateTime = values[0][inverter.field];
      const dataField = document.getElementById(inverter.field);
      const updateTimeElement = document.getElementById(inverter.updateTimeId);

      dataField.textContent = updateTime;
      updateTimeElement.textContent = updateTime;

      // Calculate and apply the CSS class based on time difference
      const timestamp = new Date(updateTime);
      const currentTime = new Date();
      const timeDifference = currentTime - timestamp;

      if (timeDifference > oneHour) {
        dataField.classList.add('old');
      } else if (timeDifference > fifteenMinutes) {
        dataField.classList.remove('old');
      }
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);