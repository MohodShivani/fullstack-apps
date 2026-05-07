# 📝 Todo App (Full Stack – MERN)

A **JWT-authenticated Todo Application** built using the **MERN stack**. 
Users can securely **sign up, sign in, and manage todos** (add, update, delete). The application follows a clean backend architecture with controllers, routes, middleware, validators, and proper input validation using **Zod**.

---

## 🚀 Features

- 🔐 User Authentication (Signup / Signin)
- 🪪 JWT-based Authorization
- 🔒 Password hashing with **bcryptjs**
- ✅ Add, Update, Delete Todos
- 📄 Protected routes using auth middleware
- 🧾 Input validation using **Zod**
- 🌐 RESTful APIs with proper responses
- 🎨 Responsive UI using **Tailwind CSS**
- 🔁 API communication via **Axios**
- 🌙 Dark Mode toggle

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Zod
- CORS

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Database

- MongoDB

---

## 📂 Project Structure

```
todo-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── todoController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── routes/
│   │   ├── authRoute.js
│   │   └── todoRoute.js
│   ├── validators/
│   │   └── authValidators.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DarkModeToggle.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── pages/
│   │   │   ├── Todos.jsx
│   │   │   ├── Signin.jsx
│   │   │   └── Signup.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── netlify.toml
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

Server will run on:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔑 API Endpoints

### Authentication

- `POST /auth/signup` → Register user
- `POST /auth/signin` → Login user

### Todos (Protected)

- `GET /todo` → Fetch all todos
- `POST /todo` → Add new todo
- `PUT /todo/:id` → Update todo
- `DELETE /todo/:id` → Delete todo


---


## 🧪 Validation & Security

- Input validation handled using **Zod**
- Passwords encrypted with **bcryptjs**
- JWT tokens used for secure route access
- Auth middleware protects private routes

---


## 🎯 Assignment Notes

This project demonstrates:

- Clean backend architecture (MVC pattern)
- Secure authentication & authorization
- REST API design
- Frontend-backend integration
- Industry-standard folder structure

---

## 🌱 Learning Outcomes

- Full-stack MERN development
- JWT authentication flow
- API validation using Zod
- State management & API handling in React

---

## 📜 License

This project is licensed under the **MIT License**.

---


🌐 Live Demo

Render: https://todo-backend-ihzw.onrender.com 
Netlify: https://shivani-task-tracker.netlify.app



## 👩‍💻 Author

**Shivani Dipak Mohod**\
Full-Stack Developer (MERN) 🚀

