// Define your inverter names and corresponding HTML element IDs
const inverters = [
  { name: 'SUNSYNK', updateTimeId: 'updateTime1' },
  { name: 'SOLARMAN', updateTimeId: 'updateTime2' },
  { name: 'DEYE', updateTimeId: 'updateTime3' }
];

// Update the inverter data
async function updateInverterData() {
  try {
    // Read the data from the Google Sheet
    sheetrock({
      url: 'https://docs.google.com/spreadsheets/d/1UsgZQY_S36ZuOTCW8hG-p05q2wlzcykAFRF-Ntjf0uU/edit#gid=0',
      query: 'select *',
      callback: function (error, options, response) {
        if (!error) {
          // Iterate through the rows in the response
          for (const row of response.rows) {
            const inverterType = row['INVERTER_TYPE'];
            const updateTime = row['LAST_UPDATE'];

            // Find the corresponding inverter in your list
            const inverter = inverters.find(inv => inv.name === inverterType);

            if (inverter) {
              const updateTimeElement = document.getElementById(inverter.updateTimeId);

              // Update the HTML element with data
              updateTimeElement.textContent = updateTime;

              // Calculate and apply the CSS class based on time difference
              const timestamp = new Date(updateTime);
              const currentTime = new Date();
              const timeDifference = currentTime - timestamp;

              if (timeDifference > 60 * 60 * 1000) { // One hour in milliseconds
                updateTimeElement.classList.add('old');
              } else if (timeDifference > 15 * 60 * 1000) { // Fifteen minutes in milliseconds
                updateTimeElement.classList.remove('old');
              }
            }
          }
        } else {
          console.error('Error fetching data from Google Sheets:', error);
        }
      }
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);
