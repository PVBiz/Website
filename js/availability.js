
import dynamoDBConfig from './availability-config.js'; // Adjust the path as needed

const AWS = require('aws-sdk');

// Set the AWS configuration using the imported configuration
AWS.config.update(dynamoDBConfig);

const dynamoDB = new AWS.DynamoDB();


// Simulated data retrieval from DynamoDB (replace with actual data retrieval)
function fetchData() {
    // Simulated data
    const data = [
        { field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', timestamp: new Date() },
        // Add more data objects for each inverter
    ];

    return data;
}

function updateInverterData() {
    const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    const inverters = document.querySelectorAll('.inverter');

    inverters.forEach((inverter, index) => {
        const data = fetchData()[index];
        const dataFields = inverter.querySelectorAll('.data span');

        dataFields[0].textContent = data.field1;
        dataFields[1].textContent = data.field2;
        dataFields[2].textContent = data.field3;

        const timestamp = new Date(data.timestamp);
        const currentTime = new Date();
        const timeDifference = currentTime - timestamp;

        if (timeDifference > oneHour) {
            dataFields.forEach((field) => field.classList.add('old'));
        } else if (timeDifference > fifteenMinutes) {
            dataFields.forEach((field) => field.classList.remove('old'));
        }
    });
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);
