import pool from "./pool.js";

export async function createUserPost(text, username) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, CURRENT_TIMESTAMP)",
    [text, username]
  );
}

export async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows.map((message) => ({
    id: message.id,
    text: message.text,
    user: message.username,
    added: message.added,
  }));
}

export async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);

  if (rows.length === 0) {
    return null;
  }

  const message = rows[0];
  return {
    id: message.id,
    text: message.text,
    user: message.username,
    added: message.added,
  };
}
