import { Pool } from "pg";

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      text TEXT,
      username VARCHAR(255),
      added TIMESTAMP
    )
  `);
};

createTable().then(() => console.log("Table ready"));

export default new Pool({
  connectionString: process.env.DATABASE_URL,
});
