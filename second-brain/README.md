Second Brain 🧠

A personal knowledge management system designed to help you capture, organize, and retrieve your ideas, notes, and insights efficiently. Inspired by the concept of a "second brain," this project allows users to store thoughts, categorize them, and share selected content securely.


Features ✨

User Authentication – Secure signup, login, and JWT-based authentication.
Content Management – Add, edit, and delete notes; organize with categories.
Sharing – Generate shareable links for individual notes.


🛠 Tech Stack

Frontend: React, TypeScript, Tailwind CSS
Backend: Node.js, Express, TypeScript
Database: MongoDB (Mongoose ORM)
API Client: Axios
Authentication: JWT
Version Control: Git & GitHub


🚀 Installation

Clone the repository
git clone https://github.com/MohodShivani/second-brain.git
cd second-brain

#Backend setup

cd backend
npm run dev


#Environment variables (.env)

PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>


#Frontend setup

cd frontend
npm run dev

Access the app at http://localhost:3000


📡 API Endpoints

#Auth

POST /api/v1/signup – Register a new user
POST /api/v1/login – Login and get JWT

#Notes / Brain Content

POST /api/v1/brain – Add new content
GET /api/v1/brain – Fetch user content
DELETE /api/v1/brain/:id – Delete content

#Sharing

POST /api/v1/brain/share – Generate shareable link
GET /api/v1/brain/:shareLink – Access shared content


📝 License

This project is licensed under the MIT License.

🌐 Live Demo

Render: https://second-brain-s2di.onrender.com
Netlify: Netlify = https://thoughts-keeper.netlify.app



✉️ Contact
GitHub: https://github.com/MohodShivani
Email: shivanimohod246@gmail.com
