# 💰 Finance Dashboard (Full Stack Project)

A full-stack finance management application built using Node.js, Express, MongoDB, and React.
The application allows users to manage financial transactions and view analytics with role-based access control.

## 🚀 Features

* 🔐 JWT Authentication (Login & Signup)
* 👥 Role-Based Access Control (Admin, Analyst, Viewer)
* 💰 Transaction Management (Create, View, Update, Delete)
* 📊 Dashboard Analytics (Income, Expense, Balance)
* 📈 MongoDB Aggregation (Category-wise & Monthly Trends)
* ⚡ Pagination & Filtering
* 🌐 RESTful API Design
* 🎨 Responsive UI using Tailwind CSS

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

## 🔐 Roles & Permissions

| Role    | Permissions                   |
| ------- | ----------------------------- |
| Admin   | Full CRUD + Dashboard Access  |
| Analyst | View Transactions + Dashboard |
| Viewer  | View Transactions Only        |

## 📊 Dashboard Functionalities

* Total Income Calculation
* Total Expense Calculation
* Net Balance
* Category-wise Spending Analysis
* Monthly Trends using Aggregation Pipelines


## 📦 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd your-project-folder
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔗 API Endpoints

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### 💰 Transactions

* GET `/api/transactions`
* POST `/api/transactions`
* PATCH `/api/transactions/:id`
* DELETE `/api/transactions/:id`

### 📊 Dashboard

* GET `/api/dashboard/summary`
* GET `/api/dashboard/category`
* GET `/api/dashboard/monthly`

## 🧪 How to Use

1. Register a new user
2. Login to receive JWT token
3. Add transactions (income/expense)
4. View transactions list
5. Access dashboard analytics
6. Test role-based access with different users

## 💡 Key Concepts Implemented

* JWT Authentication & Authorization
* Role-Based Access Control (RBAC)
* Middleware Architecture
* MongoDB Aggregation Pipeline
* REST API Design Principles
* Pagination & Filtering
* Full Stack Integration


## 📌 Project Highlights

* Secure API design with protected routes
* Role-based permissions enforced at backend level
* Clean and modular code structure
* Real-world financial dashboard use case
       
## 👨‍💻 Author

**Naman Verma**

---
