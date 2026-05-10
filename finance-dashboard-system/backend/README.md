# 📊 Finance Dashboard Backend (MERN)

A scalable and secure backend system for a **Finance Dashboard Application** built using **Node.js, Express, MongoDB**, and **JWT authentication**.
The system supports **role-based access control (RBAC)**, **data aggregation APIs**, and **schema-based validation using Zod**.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Secure login and signup
* Role-based access control (RBAC)
* Protected routes using middleware

### 👥 User & Role Management

* Create and manage users
* Assign roles: `viewer`, `analyst`, `admin`
* Update user roles and status (`active` / `inactive`)
* Admin-only access for user management APIs

### 💰 Financial Records Management

* Create, update, delete financial records
* Track income and expenses
* Categorize transactions
* User-specific data isolation

### 📊 Dashboard APIs (Aggregations)

* Total income
* Total expenses
* Net balance
* Category-wise totals
* Recent activity
* Monthly trends

### ✅ Validation & Error Handling

* Zod-based schema validation
* Middleware-driven validation
* Proper HTTP status codes
* Consistent error responses

---

## 🏗️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT (Authentication)**
* **Zod (Validation)**

---

## 📁 Project Structure

```
src/
│
├── config/            # DB & environment config
├── controllers/       # Business logic
├── models/            # Mongoose schemas
├── routes/            # API routes
├── middlewares/       # Auth, role, validation
├── validators/        # Zod schemas
└── server.js          # Entry point
```

---

## 🔐 Roles & Permissions

| Role    | Access Level                         |
| ------- | ------------------------------------ |
| Viewer  | Read-only access                     |
| Analyst | View records & dashboard             |
| Admin   | Full access (CRUD + user management) |

---

## 🔗 API Endpoints

### 🔐 Auth

* `POST /auth/signup` – Register user
* `POST /auth/signin` – Login user

---

### 👥 Users (Admin Only)

* `GET /users` – Get all users
* `PATCH /users/:id/role` – Update role
* `PATCH /users/:id/status` – Update status

---

### 💰 Records

* `POST /records` – Create record *(Admin)*
* `GET /records` – Get records *(All roles)*
* `PATCH /records/:id` – Update record *(Admin)*
* `DELETE /records/:id` – Delete record *(Admin)*

---

### 📊 Dashboard

* `GET /dashboard/summary` – Income, expense, balance
* `GET /dashboard/category` – Category-wise totals
* `GET /dashboard/recent` – Recent transactions
* `GET /dashboard/trends` – Monthly trends

---

## 🔑 Authentication

All protected routes require a JWT token:

```
Authorization: Bearer <your_token>
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd finance-dashboard-backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URL=your_mongodb_connection
JWT_PASSWORD=your_secret_key
```

### 4️⃣ Run the Server

```
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## 🧪 Testing

Use **Postman** to test APIs:

* Add Bearer Token for protected routes
* Test RBAC by using different roles
* Validate error handling with invalid inputs

---

## 🧠 Key Highlights

* Clean MVC architecture
* Middleware-based validation (Zod)
* Secure RBAC implementation
* Aggregation pipelines for dashboard analytics
* Production-ready API design

---

## 📌 Future Improvements

* Pagination & filtering
* Advanced analytics
* Refresh tokens
* Rate limiting & security enhancements

---


## 👩‍💻 Author

**Shivani Dipak Mohod**

---

## ⭐ License

This project is for educational and demonstration purposes.
