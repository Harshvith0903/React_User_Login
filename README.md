# React User Login System

## Overview
This project is a **React-based User Authentication System** with a backend. It provides a secure login, signup, and authentication mechanism using **React (frontend)** and **Node.js/Express (backend)**.

---

## Features
- **User Authentication** (Signup & Login)
- **JWT-based Authentication** for secure sessions
- **React Frontend** for UI interaction
- **Node.js & Express Backend** for handling API requests
- **MongoDB / PostgreSQL (Modify as needed) for user storage**

---

## Installation
### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/React_User_Login.git
cd React_User_Login-main
```

### **2. Install Dependencies**
#### **Frontend (React App)**
```bash
cd client
npm install
```

#### **Backend (Node.js + Express Server)**
```bash
cd ../server
npm install
```

---

## Usage
### **1. Start the Backend Server**
Navigate to the `server` folder and run:
```bash
npm start
```
The backend will run on `http://localhost:5000`.

### **2. Start the React Frontend**
Navigate to the `client` folder and run:
```bash
npm start
```
The frontend will be accessible at `http://localhost:3000`.

---

## API Endpoints (Backend)
- **POST /api/auth/signup** → Registers a new user
- **POST /api/auth/login** → Logs in the user and returns a JWT token
- **GET /api/auth/user** → Fetches authenticated user data

---

## Expected Output
- Users can **register** and **log in** securely.
- JWT tokens are stored and validated.
- React UI interacts with the backend API.

---

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes and push.
4. Open a Pull Request.

---

## License
This project is licensed under the MIT License. Feel free to modify and use it!
