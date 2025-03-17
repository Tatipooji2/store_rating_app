const express = require('express');
const bodyParser = require('body-parser');
const User = require('./User');
const Store = require('./Store');
const Rating = require('./Rating');
const sequelize = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware to handle user registration
app.post('/api/register', async (req, res) => {
  const { name, email, password, address, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, address, role });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

// Middleware to handle store creation
app.post('/api/stores', async (req, res) => {
  const { name, email, address } = req.body;
  try {
    const store = await Store.create({ name, email, address });
    res.status(201).json({ message: 'Store created successfully', store });
  } catch (error) {
    res.status(400).json({ error: 'Error creating store' });
  }
});

// Middleware to fetch all stores
app.get('/api/stores', async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching stores' });
  }
});

// Middleware to fetch store details
app.get('/api/stores/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const store = await Store.findByPk(id);
    if (store) {
      res.json(store);
    } else {
      res.status(404).json({ error: 'Store not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching store details' });
  }
});

// Middleware to handle user login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected successfully.');
});
