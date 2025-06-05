const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server f
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let cart = [];

app.use(cors());
app.use(express.json());

app.post('/api/cart', (req, res) => {
    const product = req.body;
    cart.push(product);
    res.json({ message: 'Product added to cart', cart });
});

app.get('/api/cart', (req, res) => {
    res.json(cart);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
