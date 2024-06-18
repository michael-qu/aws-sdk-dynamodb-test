import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

async function GetItem(tableName, key) {
    const command = new GetCommand({
        TableName: tableName,
        Key: {
            BlockType: key,
        },
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;

}

GetItem("BlockchainDataFetcher", "LastFetched")
export {};