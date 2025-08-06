# 🛒 CodeAlpha E-commerce Backend

This is a complete backend API for an e-commerce platform built using **Node.js**, **Express**, and **MongoDB**.

## 🔧 Features

- ✅ User registration & login with JWT authentication
- 🛡️ Protected routes
- 📦 Product creation & listing
- 🛒 Cart system (add, view, remove items)
- 🔐 Middleware-based access control

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- Bcrypt (for password hashing)

## 📁 Project Structure

server/
├── middleware/
│ └── auth.js
├── models/
│ ├── Product.js
│ ├── cart.js
│ └── user.js
├── routes/
│ ├── auth.js
│ ├── cartRoutes.js
│ └── productRoutes.js
├── .env
├── server.js