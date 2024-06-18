import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

async function PutItem(tableName, key, value) {
    try {
        const command = new PutCommand({
            TableName: tableName,
            Item: {
                BlockType: key,
                BlockNumber: value
            }
        });
    
        const response = await docClient.send(command);
        console.log(response);
        return response;

    } catch (err) {
        console.error("Error: ", err);
    }

}

PutItem("BlockchainDataFetcher", "LastFetched", 123);
export {};