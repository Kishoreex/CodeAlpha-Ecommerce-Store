const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @route GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// @route POST /api/products
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
