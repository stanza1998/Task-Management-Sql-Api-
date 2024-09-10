// dbconn.js
const { Pool } = require('pg');

// Create a new pool instance with the connection string
const pool = new Pool({
    user: 'postgres.ebixvmlvnojarwequlku',           // The PostgreSQL user
    host: 'aws-0-us-east-1.pooler.supabase.com',  // Supabase PostgreSQL host
    database: 'postgres',       // Database name
    password: 'Stanzanaribjj98**', // Replace with your actual password
    port: 6543                  // Port number
});

// Export the pool for use in other files
module.exports = pool;
