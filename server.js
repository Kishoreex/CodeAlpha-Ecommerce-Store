const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config({ path: './server/.env' });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB and then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log('❌ MongoDB connection error:', err.message);
  });

  const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api', protectedRoutes);

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);
