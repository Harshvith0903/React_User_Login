const pool = require("./database"); // Import your database connection

(async () => {
  try {
    const result = await pool.query("SELECT NOW();");
    console.log("Database connection successful:", result.rows[0]);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    pool.end(); // Close the database connection
  }
})();
