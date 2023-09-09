import dynamoDBConfig from './availability-config.js';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: dynamoDBConfig.accessKeyId,
  secretAccessKey: dynamoDBConfig.secretAccessKey,
  region: dynamoDBConfig.region,
});

const dynamoDB = new AWS.DynamoDB();

function updateInverterData() {
  const fifteenMinutes = 15 * 60 * 1000; // 15 minutes in milliseconds
  const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

  const inverters = [
    { name: 'SUNSYNK', fields: ['field1'], updateTimeId: 'updateTime1' },
    { name: 'DEYE', fields: ['field4'], updateTimeId: 'updateTime2' },
    { name: 'SOLARMAN', fields: ['field7'], updateTimeId: 'updateTime3' }
  ];

  inverters.forEach(async (inverter) => {
    const params = {
      TableName: dynamoDBConfig.tableName,
      Key: {
        SOLAR_TYPE: { S: inverter.name }
      }
    };

    try {
      const data = await dynamoDB.getItem(params).promise();
      const dataFields = inverter.fields.map((field) => document.getElementById(field));
      const updateTime = document.getElementById(inverter.updateTimeId);

      if (data.Item) {
        const timestamp = new Date(data.Item.UPDATE_TIME.S);
        const currentTime = new Date();
        const timeDifference = currentTime - timestamp;

        // Adjust this part based on your DynamoDB schema
        dataFields[0].textContent = data.Item.Field1.S;
        // Add similar lines for other fields if needed

        updateTime.textContent = timestamp.toLocaleString();

        if (timeDifference > oneHour) {
          dataFields.forEach((field) => field.classList.add('old'));
        } else if (timeDifference > fifteenMinutes) {
          dataFields.forEach((field) => field.classList.remove('old'));
        }
      } else {
        // Handle the case where no data is found for the inverter
        console.error(`No data found for ${inverter.name}`);
      }
    } catch (error) {
      console.error('Error fetching data from DynamoDB:', error);
    }
  });
}

// Update data initially and then every 5 minutes (adjust as needed)
updateInverterData();
setInterval(updateInverterData, 5 * 60 * 1000);
