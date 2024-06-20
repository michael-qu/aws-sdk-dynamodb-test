import { PutItem } from "./put-item";
import { GetItem } from "./get-item";

async function main(): Promise<void> {
    try {
        const dbName = "DynamoDB-Test";
        // const dbName = "BlockchainDataFetcher";
        await PutItem(dbName, "LastFetched", 123456789);
        const response = await GetItem(dbName, "LastFetched");
        if (response) {
            console.log(response.Item.BlockNumber);
            console.log(response.Item.TimeStamp);
        } else {
            console.log("No block number is recorded!");
        }
    } catch (err) {
        console.error("Error: ", err);
    }

}

main();
