import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export async function getGroups() {
  const result = await client.execute(
    "SELECT * FROM tg_groups ORDER BY created_at DESC"
  );
  return result.rows;
}

export async function addGroup(name: string, description: string, url: string, category: string) {
  await client.execute({
    sql: `INSERT INTO tg_groups (name, description, url, category) VALUES (?, ?, ?, ?)`,
    args: [name, description, url, category],
  });
}