
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:eypn87wdZLDZTbbb@localhost:5432/projeto_db",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

module.exports = client;
