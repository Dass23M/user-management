# user-management
Simple user - management web application (React.js , Express.js, REST API, MySQL)


# User Management System

This is a simple full-stack **User Management Web App** built using:

- **Frontend:** React + Vite
- **Backend:** Express.js
- **Database:** MySQL
- **API Communication:** RESTful API using Axios

## 🚀 Features

- Add new users with name and email
- View all users in a list
- Update user info
- Delete users
- Responsive user interface

## 🛠️ Technologies Used

| Tech        | Description                  |
|-------------|------------------------------|
| React       | Frontend library              |
| Vite        | Fast development tooling     |
| Express.js  | Backend server                |
| MySQL       | Database                      |
| Axios       | HTTP client                   |
| React Router | Page routing (SPA)           |

## 📁 Project Structure

```bash
MERN/
├── backend/                 # Express.js backend
│   └── server.js
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserForm.jsx
│   │   │   └── UserList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
│   └── vite.config.js
├── README.md
└── .gitignore


CREATE DATABASE userdb;
USE userdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);


