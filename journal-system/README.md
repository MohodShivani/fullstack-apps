# Journal Insights App

A simple **full-stack journaling application** where users can write short journal entries, analyze emotions, and view insights from their previous entries.

---

# Features

* User Signup and Signin
* Write a one-line journal entry
* Select ambience for the entry
* Automatic emotion analysis
* View previous journal entries
* View insights from journal data

---

# Tech Stack

## Frontend

* React
* TailwindCSS
* Axios
* React Router

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Sentiment (for emotion detection)
* Zod (validation)

---

# Project Structure

```
project-root

frontend
│
├── src
│   ├── pages
│   │   ├── Signup.jsx
│   │   ├── Signin.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── journalController.js
│
├── middlewares
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Journal.js
│
├── routes
│   ├── authRoute.js
│   └── journalRoute.js
│
├── services
│   └── llmService.js
│
├── validators
│   ├── authValidator.js
│   └── journalValidator.js
│
└── server.js
```

---

# Installation

## 1 Clone the repository

```
git clone https://github.com/your-username/journal-insights-app.git
```

---

# Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside backend:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```
node server.js
```

Backend runs on:

```
http://localhost:3000
```

---

# Frontend Setup

```
cd frontend
npm install
```

Run frontend:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# API Endpoints

## Authentication

Signup

```
POST /api/v1/auth/signup
```

Signin

```
POST /api/v1/auth/signin
```

---

## Journal

Create Journal Entry

```
POST /api/v1/journal
```

Get All Journal Entries

```
GET /api/v1/journal
```

Analyze Text

```
POST /api/v1/journal/analyze
```

Get Insights

```
GET /api/v1/journal/insights
```

---

# Example Emotion Analysis Output

```
{
  "emotion": "calm",
  "keywords": [
    "rain",
    "nature",
    "peace"
  ],
  "summary": "User experienced relaxation during the forest session"
}
```

---

# Application Flow

1. User signs up or logs in
2. User writes a journal entry
3. Backend analyzes emotion
4. Entry is saved in MongoDB
5. User can view previous entries
6. User can generate insights from entries

---

# Future Improvements

* Charts for emotion trends
* Better AI emotion detection
* Journal edit and delete features
* User profile page
* Responsive mobile UI

---

# Author

Full-stack practice project built with React, Node.js, Express, and MongoDB.
