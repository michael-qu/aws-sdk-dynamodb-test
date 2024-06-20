import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

async function PutItem(tableName: string, key: string, value: number): Promise<void> {
    try {
        // Get the current timestamp
        const currentTimeStamp = new Date().toISOString();

        const command = new PutCommand({
            TableName: tableName,
            Item: {
                BlockType: key,
                BlockNumber: value,
                TimeStamp: currentTimeStamp
            }
        });
    
        const response = await docClient.send(command);
        console.log(response);
        // return response;

    } catch (err) {
        console.error("Error: ", err);
    }

}

// PutItem("BlockchainDataFetcher", "LastFetched", 123);
export { PutItem };