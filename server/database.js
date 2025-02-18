const { Pool } = require("pg");

// PostgreSQL connection configuration
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  password: "1109", // Replace with your PostgreSQL password
  host: "localhost",
  port: 5432,
  database: "test", // Replace with your database name
});

module.exports = pool;
