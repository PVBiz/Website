// main.js
import dynamoDBConfig from './availability-config.js';

const dynamodb = new AWS.DynamoDB({
  config: dynamoDBConfig
});

function getLatestUpdateTimes() {
  const params = {
    TableName: "Inverters",
    KeyConditionExpression: "type = :type",
    ExpressionAttributeValues: {
      ":type": {
        S: "Inverter 1"
      }
    }
  };

  const result = await dynamodb.query(params);

  for (const item of result.Items) {
    const lastUpdateTime = item.lastUpdateTime;

    // Set the value for field 1
    document.getElementById("lastUpdateTime1").textContent = lastUpdateTime;

    // Set the value for field 4
    document.getElementById("lastUpdateTime4").textContent = lastUpdateTime;

    // Set the value for field 7
    document.getElementById("lastUpdateTime7").textContent = lastUpdateTime;
  }
}

getLatestUpdateTimes();