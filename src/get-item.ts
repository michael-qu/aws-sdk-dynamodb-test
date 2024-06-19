import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

async function GetItem(tableName: string, key: string): Promise<DynamoDBResponse | undefined> {
    try {
        const command = new GetCommand({
            TableName: tableName,
            Key: {
                BlockType: key,
            },
        });
    
        const response = await docClient.send(command);
        console.log(response);
        return response as DynamoDBResponse;

    } catch (err) {
        console.error("Error: ", err);
    }
    

}

// GetItem("BlockchainDataFetcher", "LastFetched");
export { GetItem };


interface DynamoDBResponse {
    "$metadata": {
        httpStatusCode: number,
        requestId: string,
        extendedRequestId: string | undefined,
        cfId: string | undefined,
        attempts: number,
        totalRetryDelay: number
    }
    Item: {
        BlockNumber: number,
        BlockType: string
    }
}