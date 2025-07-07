# 🛒 Simple E-commerce API

This is a **Simple E-commerce API** built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**. It supports user registration/login, product listing and management, cart operations, and order creation with role-based access control for `admin` and `customer`.

---

## 📁 Project Structure

E-commerce-api/
├── backend/
│ ├── config/ # Database connection
│ ├── controllers/ # All business logic
│ ├── middlewares/ # JWT and role-based access middleware
│ ├── models/ # MongoDB models for Users, Products, Carts, Orders
│ ├── routes/ # API route definitions
│ ├── .env # Environment variables
│ ├── server.js # Entry point
│ └── package.json # Dependencies and scripts
├── frontend/ (Optional) # HTML frontend to test API
|   |__ index.html


---

## 🚀 Features

### ✅ Core Features
- **User Authentication (JWT)**
- **User Roles: `customer` and `admin`**
- **Product Listings (with pagination and search)**
- **Cart Management (add, view, remove items)**
- **Order Creation from Cart**

### 🛡 Role-Based Access
| Feature | Customer | Admin |
|--------|----------|-------|
| View Products | ✅ | ✅ |
| Search/Filter Products | ✅ | ✅ |
| Add/Remove Cart Items | ✅ | ❌ |
| Place Order | ✅ | ❌ |
| Add/Update/Delete Products | ❌ | ✅ |

---

## 🧑‍💻 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **JWT** (Authentication)
- **bcrypt.js** (Password hashing)
- **dotenv**
- **CORS**

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/challasamatha/ecommerce-api.git
cd ecommerce-api/backend

2. Install Dependencies
      npm install
3. Setup Environment Variables

  Create a .env file inside backend/
  PORT=5000
  MONGO_URI=mongodb://127.0.0.1:27017/ecommerce-api
  JWT_SECRET=your_jwt_secret

4. Run the Server

    npm run dev
    The server will start on http://localhost:5000

🔐 API Endpoints
🔑 Auth Routes (/api/auth)
Method	Route	Description
POST	/register	Register a user (username, password, role)
POST	/login	Login and get JWT token

📦 Product Routes (/api/products)
Method	Route	Description
GET	/	View all products (supports pagination & search)
POST	/	Create new product (admin only)
PUT	/:id	Update product (admin only)
DELETE	/:id	Delete product (admin only)

Query Params for GET:

page=1

limit=5

search=shirt

category=electronics

🛒 Cart Routes (/api/cart)
Method	Route	Description
GET	/	Get cart items
POST	/add	Add item to cart (productId, quantity)
POST	/remove	Remove item from cart (productId)

📬 Order Routes (/api/orders)
Method	Route	Description
POST	/	Place order from current cart

🧪 Sample Test Flow (Using Postman)
Register user

POST /api/auth/register with username, password, role

Login user

POST /api/auth/login

Copy returned JWT token

Add Product (as Admin)

POST /api/products with Authorization: Bearer <token>

Payload: { "name": "Phone", "price": 10000, "category": "Electronics" }

List Products (public)

GET /api/products

Add to Cart (as Customer)

POST /api/cart/add with productId, quantity

Place Order

POST /api/orders

🌐 Frontend
Open frontend/index.html in your browser to test product listings using a simple HTML interface.

🤝 License
  Name : Challa Samatha
  E-mail : samathachowdary2004@gmail.com

