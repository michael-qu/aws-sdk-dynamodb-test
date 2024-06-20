// This code is only for test purpose
// In reality the table is defined in ../infrastructure/dynamodb.tf
// and deleted during "terraform destroy"
import { DeleteTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

async function DeleteTable(tableName: string): Promise<void> {
  try {
    const command = new DeleteTableCommand({
      TableName: tableName,
    });
  
    const response = await client.send(command);
    console.log(response);
    // return response;

  } catch (err) {
    console.error("Error: ", err);
  }
}

DeleteTable("BlockchainDataFetcher");
export { DeleteTable };