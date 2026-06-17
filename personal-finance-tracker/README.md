# 💰 Personal Finance Tracker

A full-stack web application that helps users manage their personal finances by tracking income, expenses, savings, and monthly financial summaries.

## 🚀 Features

### 🔐 Authentication
- User Signup
- User Login
- JWT-based Authentication
- Protected Routes

### 💵 Transaction Management
- Add Income
- Add Expense
- Update Transactions
- Delete Transactions
- View All Transactions

### 📊 Dashboard
- Total Income
- Total Expenses
- Total Savings
- Expense Breakdown by Category
- Monthly Financial Summary

### 📱 User Interface
- Responsive Design
- Clean Dashboard
- Category-wise Expense Analysis
- Easy Navigation

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- TypeScript
- JWT Authentication
- bcrypt

### Database
- PostgreSQL

---

## 📂 Project Structure

```
personal-finance-tracker/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── routes/
│   │   └── App.tsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── db/
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Schema

### Users Table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


### Transactions Table

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(10) NOT NULL CHECK (type IN ('income', 'expense')),
    category VARCHAR(100) NOT NULL,
    description TEXT,
    amount NUMERIC(10,2) NOT NULL CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

PORT=5000

DATABASE_URL=postgresql://username:password@localhost:5432/finance_tracker

JWT_SECRET=your_secret_key


---

## ⚙️ Installation

### 1. Clone Repository

git clone https://github.com/your-username/personal-finance-tracker.git
cd personal-finance-tracker

---

### 2. Backend Setup


cd backend
npm install
npm run dev


Server runs on:

http://localhost:3000


---

### 3. Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


---

## 📡 API Endpoints

### Authentication

#### Register User

POST /auth/signup

Request Body:

{
  "username": "shivani",
  "email": "shivani@gmail.com",
  "password": "password123"
}

---

#### Login User

POST /auth/signin


Request Body:


{
  "email": "shivani@gmail.com",
  "password": "password123"
}


---

### Transactions

#### Create Transaction


POST /transactions

{
  "type": "expense",
  "category": "Food",
  "description": "Lunch",
  "amount": 250
}


---

#### Get All Transactions

GET /transactions

---

#### Update Transaction

PUT /transactions/:id

---

#### Delete Transaction

DELETE /api/transactions/:id

---

### Dashboard

#### Get Summary

GET /api/dashboard/summary


Response:

{
  "totalIncome": 50000,
  "totalExpense": 20000,
  "savings": 30000
}


---

#### Expense Breakdown

GET /api/dashboard/expense-category

Response:

[
  {
    "category": "Food",
    "total": 5000
  },
  {
    "category": "Travel",
    "total": 3000
  }
]

---

## 🔒 Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected APIs
- User-specific Data Access
- SQL Injection Prevention using Parameterized Queries

---

## 🎯 Future Enhancements

- Expense Charts & Graphs
- Budget Planning
- Recurring Transactions
- Export Reports to PDF
- Email Notifications
- Dark Mode
- Multi-Currency Support

---

##Live Link

Netlify:https://finanance-tracker.netlify.app/ 
Render: https://fullstack-apps-finance-manager.onrender.com

## 👩‍💻 Author

**Shivani Mohod**

Aspiring Full Stack Developer passionate about building scalable web applications using React, TypeScript, Node.js, Express, and PostgreSQL.

---

## 📜 License

This project is licensed under the MIT License.