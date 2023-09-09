function updateInverterData() {
    const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    // Define your inverter names and corresponding HTML element IDs
    const inverters = [
        { name: 'SUNSYNK', field: 'field1', updateTimeId: 'updateTime1' },
        { name: 'DEYE', field: 'field4', updateTimeId: 'updateTime2' },
        { name: 'SOLARMAN', field: 'field7', updateTimeId: 'updateTime3' }
    ];

    // Fetch and parse the data from availability_data.txt
    fetch('js/data/availability_data.txt')
        .then(response => response.text())
        .then(data => {
            try {
                const jsonData = JSON.parse(data);
                for (const inverter of inverters) {
                    if (jsonData.hasOwnProperty(inverter.name)) {
                        const updateTime = jsonData[inverter.name];
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
                    } else {
                        console.error(`No data found for ${inverter.name}`);
                    }
                }
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);