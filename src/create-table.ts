// This code is only for test purpose. In reality the table should be created during "terraform apply"
import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

async function CreateTable(tableName: string, keyName: string): Promise<void> {
  try {
    const command = new CreateTableCommand({
      TableName: tableName,
      // For more information about data types,
      // see https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes and
      // https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html#Programming.LowLevelAPI.DataTypeDescriptors
      AttributeDefinitions: [
        {
          AttributeName: keyName,
          AttributeType: "S",
        }
      ],
      KeySchema: [
        {
          AttributeName: keyName,
          KeyType: "HASH",
        }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    });

    const response = await client.send(command);
    console.log(response);
    // return response;

  } catch (err) {
    console.error("Error: ", err);
  }

}

CreateTable("BlockchainDataFetcher", "BlockType");
export { CreateTable };