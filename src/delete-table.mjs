import { DeleteTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

async function DeleteTable(tableName) {
  try {
    const command = new DeleteTableCommand({
      TableName: tableName,
    });
  
    const response = await client.send(command);
    console.log(response);
    return response;

  } catch (err) {
    console.error("Error: ", err);
  }
}

DeleteTable("BlockchainDataFetcher");
export{};