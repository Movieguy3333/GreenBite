import express from 'express';
import { Pool } from 'pg';

// Database connection setup
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Set your database URL in .env
});

const app = express();
app.use(express.json());

// API Routes (none configured yet)

// Health check route
app.get('/', async (req, res) => {
    res.send('GreenBite server is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`API endpoints available at http://localhost:${PORT}/api/`);
});