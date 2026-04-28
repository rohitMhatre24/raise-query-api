# 🚀 Raise Query API (Backend)

A production-ready REST API for managing user queries/applications with role-based access control (RBAC).

---

## 🧠 Features

* 🔐 JWT Authentication (Login)
* 👤 Role-based Access (USER / ADMIN)
* 📄 Create & Manage Applications
* ✅ Approve / Reject Applications (Admin)
* 👥 User Management (Admin)
* 📊 Dashboard APIs (User + Admin)
* 🔎 Sequelize ORM with MySQL
* 🛡️ Secure APIs with Middleware

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT (Authentication)
* bcrypt.js (Password hashing)

---

## 📁 Project Structure

```
src/
 ├── config/
 ├── controllers/
 ├── middleware/
 ├── models/
 ├── routes/
 ├── services/
 ├── app.js
server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone Repo

```bash
git clone <your-backend-repo-url>
cd raise-query-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=raise_query
JWT_SECRET=your_secret_key
```

### 4. Run Server

```bash
npm run dev
```

---

## 🔐 Authentication

* Login → returns JWT token
* Pass token in headers:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### 🔑 Auth

| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| POST   | /api/auth/login | Login user  |

---

### 📄 Applications

| Method | Endpoint                     | Role  | Description           |
| ------ | ---------------------------- | ----- | --------------------- |
| GET    | /api/applications            | ADMIN | Get all applications  |
| GET    | /api/applications/my         | USER  | Get user applications |
| POST   | /api/applications            | USER  | Create application    |
| PATCH  | /api/applications/:id/status | ADMIN | Update status         |

---

### 📊 Dashboard

| Method | Endpoint                          | Role  |
| ------ | --------------------------------- | ----- |
| GET    | /api/applications/dashboard       | USER  |
| GET    | /api/applications/admin/dashboard | ADMIN |

---

### 👥 Users (Admin Only)

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | /api/users       | Get all users |
| POST   | /api/users       | Create user   |
| GET    | /api/users/count | Total users   |

---

## 🧠 Key Concepts

* RBAC (Role-Based Access Control)
* Middleware-based security
* Service layer architecture
* Clean separation of concerns

---

## 🚀 Future Improvements

* Pagination & filtering optimization
* Email notifications
* File uploads
* Audit logs

---

## 👨‍💻 Author

Rohit Mhatre
