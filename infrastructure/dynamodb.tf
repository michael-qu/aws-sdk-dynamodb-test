locals {
  db_name = "DynamoDB-Test"
}

resource "aws_dynamodb_table" "this" {
  name         = local.db_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "BlockType"

  attribute {
    name = "BlockType"
    type = "S"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = false
  }

  tags = {
    Name        = local.db_name
    Environment = "test"
  }
}
