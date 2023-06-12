const mysql = require('mysql2/promise');

console.log("passou no DB")

const pool = mysql.createPool({
  host: 'containers-us-west-37.railway.app',
  user: 'root',
  password: 'HGTQ4V0CYKFvh2xEvTiz',
  database: 'railway',
  port: '6383',
  waitForConnections: true,
});

module.exports = pool;