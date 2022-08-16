const express = require('express');
const db = require('../config/database/index');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json())

app.use('/products', require('./routes/products'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});