const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}, this is a protected route` });
});

module.exports = router;
