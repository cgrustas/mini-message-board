import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Hi there!', 'Amando', CURRENT_TIMESTAMP),
  ('Hello World!', 'Charles', CURRENT_TIMESTAMP)`;

async function main() {
  console.log("seeding...");

  const connectionString = process.argv[2]; // Gets the third argument (index 0 is node, index 1 is the script path)

  if (!connectionString) {
    console.error("Please provide a database URL as an argument");
    process.exit(1);
  }

  const client = new Client({
    connectionString,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
