const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const validUser = username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS;

  if (!validUser) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
