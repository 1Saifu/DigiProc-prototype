import express from 'express';
import fs from 'fs/promises'; 

const app = express();
const PORT = 8080;

app.get('/api/products', async (req, res) => {
    const data = await fs.readFile('../src/data/products.json', 'utf-8');
    const products = JSON.parse(data); 
    res.json(products); 
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
