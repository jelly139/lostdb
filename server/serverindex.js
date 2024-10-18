const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 5173;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lostpedia',
    password: 'targhee1',
    port: 5173,
})

app.get('/api/characters', async (req, res) => {
    try {
        const result = await pool.query('Select * FROM characters');
        res.json(result.rows);
    } catch (error) {
    console.error('Error fetching characters:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});