// server.js
//const express = require('express');
//const app = express();
//
//app.get('/hello-world', (req, res) => {
//  res.json({ message: 'Hello, World!' });
//});
//
//app.listen(3000, () => {
//  console.log('Server is running on http://localhost:3000');
//});

//cors
//const express = require('express');
//const cors = require('cors'); // 引入 cors
//const app = express();
//
//app.use(cors()); // 允許所有來源的 CORS 請求
//
//app.get('/hello-world', (req, res) => {
//  res.json({ message: 'Hello, World!' });
//});
//
//app.listen(3000, () => {
//  console.log('Server is running on http://localhost:3000');
//});


//postgresql
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

// 設置 PostgreSQL 連接池
const pool = new Pool({
  user: 'user',
  host: 'hostname',
  database: 'database',
  password: 'password',
  port: port,
});

// API 端點來獲取訊息
app.get('/hello-world', async (req, res) => {
  try {
    const result = await pool.query('SELECT message FROM hello_world');
    res.json({ message: result.rows[0].message });
  } catch (error) {
    console.error('Error querying database:', error);
    res.status(500).json({ error: 'Database query error' });
  }
});

// 啟動伺服器
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

