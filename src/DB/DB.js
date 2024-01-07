const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // your database username
  host: '127.0.0.1', // using the IP address for localhost
  database: 'postgres', // your database name
  password: 'Cy318209152-', // your database password
  port: 5432, // the port PostgreSQL server is listening on, 5432 is the default
});

// Function to test the database connection
async function testDbConnection() {
  try {
    // Try to connect and execute a simple query
    await pool.query('SELECT NOW()');
    console.log("Database connection successful.");
  } catch (error) {
    // Log any errors
    console.error("Database connection failed:", error);
  }
}

// Call the test function
testDbConnection();

module.exports = { pool };
