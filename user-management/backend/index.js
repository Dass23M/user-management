const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LLdm2323$DM$', 
    database: 'userdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Connected to MySQL');
});

// Create User
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ id: result.insertId, name, email });
    });
});


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const sql = 'UPDATE users SET name=?, email=? WHERE id=?';
    db.query(sql, [name, email, req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ id: req.params.id, name, email });
    });
});


app.delete('/users/:id', (req, res) => {
    const sql = 'DELETE FROM users WHERE id=?';
    db.query(sql, [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'User deleted' });
    });
});


  
  

app.listen(3001, () => {
    console.log('🚀 Backend running on http://localhost:3001');
});
