function updateInverterData() {
    const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    // Define your inverter names and corresponding HTML element IDs
    const inverters = [
        { name: 'SUNSYNK', field: 'field1', updateTimeId: 'updateTime1' },
        { name: 'DEYE', field: 'field4', updateTimeId: 'updateTime2' },
        { name: 'SOLARMAN', field: 'field7', updateTimeId: 'updateTime3' }
    ];
    //
    // Fetch and parse the data from availability_data.txt
    fetch('js/data/availability.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            
            // Iterate through each line in the data
            lines.forEach(line => {
                const parts = line.trim().split(':');
                const inverterName = parts[0].trim();
                const updateTime = parts[1].trim();

                // Find the corresponding inverter in the inverters array
                const inverter = inverters.find(inv => inv.name === inverterName);

                if (inverter) {
                    const dataField = document.getElementById(inverter.field);
                    const updateTimeElement = document.getElementById(inverter.updateTimeId);

                    // Update the HTML elements with data
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
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);
