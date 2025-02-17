# 🛒 Ecommerce Follow Along

## 🚀 E-Commerce Project - Key Takeaways

### 🎯 Project Goals
✅ Build a full-fledged e-commerce app using the MERN stack.  
✅ Gain hands-on experience in real-world full-stack development.  

---

## 📚 Learning Outcomes
📌 Understand the structure of a MERN stack project.  
📌 Set up project repositories and foundational tools.  
📌 Master core functionalities:
- 🔑 User Authentication (Login/Register).  
- 📦 Product & Order Management.  
- 🗃️ Database Schema Design.  

---

## 🛠️ Core Concepts
- 🔹 *REST API Design* → Create endpoints for users, products & orders.  
- 🔹 *MongoDB Schema* → Structure meaningful data models.  
- 🔹 *Authentication* → Secure login & registration systems.  
- 🔹 *Backend Development* → Use Node.js + Express for APIs.  

---

## 🏆 Milestones Overview

### 📌 Project Overview
🚀 Introduction to MERN stack.  
🔍 Live Demo of the final app.  
📌 Set up GitHub repo + README 📜.  

---

## 🛠️ Development Environment Setup
✅ Install tools: *Node.js, npm, MongoDB, VS Code*.  
✅ Initialize the project:
sh
npm init

✅ Install dependencies:
sh
npm install express mongoose dotenv


---

## ⚙️ Backend Development
🛠️ Create REST APIs for:
- 👤 *User Authentication* (Register/Login).  
- 🛍️ *Product Management* (CRUD operations).  
- 📦 *Order Handling* (Orders & Transactions).  

📌 *Database Design:*
- 🏛️ *MongoDB Schemas* for Users, Products, Orders.  
- 🛡️ Implement *middleware* for validation & error handling.  

---

## 🎨 Frontend Development
🖥️ Set up *React project* with create-react-app or Vite.  
🎨 Build *key UI components*:
- 🔑 *User Pages* (Login, Register, Profile).  
- 🛒 *Product Pages* (Listings, Search, Details).  
- 🛍️ *Order Pages* (Cart, Checkout, History).  
🔀 Use *React Router* for navigation.  
📦 Manage *state* with Redux or Context API.  

---

## 🔗 Integration, Testing & Deployment
🔗 Integrate *Frontend & Backend* using API calls.  
🛠️ Test with *Postman* and fix bugs 🐞.  
🚀 *Deploy* the project:
- 🔥 *Backend* → Heroku, Render, or AWS.  
- 🌐 *Frontend* → Netlify or Vercel.  
🛡️ Ensure *security & performance* before launch!  

---

## 🎯 Final Deliverable
✅ A *fully functional MERN-based* e-commerce app featuring:
- 🔒 *Secure Authentication*.  
- 📦 *Product & Order Management*.  
- 📱 *Responsive & User-Friendly UI*.  
✅ Fully *tested* & *deployed online*! 🚀  

---

🔥 *Let’s build something awesome together!* 💻⚡  

# Milestone 2: Project Structure & Login Page 🚀  

## Overview  
In Milestone 2, we focused on structuring the project, setting up both the frontend and backend, and developing the Login Page for the e-commerce application.  

## Key Accomplishments  

### 📁 Project Structure  
- Organized the project with separate frontend/ and backend/ directories.  

### 🌐 Frontend Setup  
- Initialized a React app for building the user interface.  
- Configured Tailwind CSS for utility-based styling.  
- Implemented a fully functional and styled Login Page.  

### 🛠 Backend Setup  
- Set up a basic Node.js + Express server to prepare for future API integration.  

### 🎯 Learning Outcomes  
By completing this milestone, we learned:  
- How to structure a full-stack project.  
- Setting up a React application with Tailwind CSS.  
- Configuring a Node.js backend.  
- Creating a login page with basic styling and functionality.  

## ✅ Submission Details  
- Code is pushed to the GitHub repository created in Milestone 1.  
- The repository includes:  
  - Proper folder structure (frontend & backend).  
  - Functional Login Page.  
  - Updated README summarizing the progress.  

🚀 Ready for the next milestone


# Milestone 3: Project Setup for Backend

In this milestone, we successfully set up the backend for our Ecommerce project using Node.js, Express.js, and MongoDB.

✅ Achievements in this Milestone
Set up a Node.js backend server using Express.
Configured the server to listen on a designated port.
Integrated MongoDB for efficient data storage.
Established a connection between the server and MongoDB to confirm successful integration.


# Milestone 4: Creating User Model and Controller

### Achievements
1. *User Model:*
   - Created a User schema using *Mongoose*.
   - Defined fields such as name, email, password, and profileImage.
   - Implemented password hashing using *bcryptjs* for security.

2. *User Controller:*
   - Developed controller functions for user-related actions:
     - Registering a new user.
     - Retrieving user information.
     - Handling user authentication.
   - Integrated the controller with *Express routes*.

3. *Multer Integration:*
   - Configured *Multer* for handling file uploads.
   - Allowed users to upload profile images and store them in a designated folder.


# Milestone 5: Frontend Development - Sign-Up Page

### Overview  
In this milestone, I built the *Sign-Up Page* using *HTML* and *CSS* and added *form validation* to ensure users input valid data.  

### Features  
- *Sign-Up Page*: Created a responsive and user-friendly sign-up form.  
- *Form Validation*: Added validation for required fields, email format, password matching, and minimum password length.  

# Milestone 6 - User Authentication & Encryption

In this milestone, I implemented user authentication with password encryption and saved complete user data in the database.

## Features Implemented

### 1. Encrypt the Password
- Used bcrypt to hash the user's password during the signup process.
- Ensured that the hashed password is saved in the database instead of storing the plain text password.

### 2. Store Complete User Data
- Saved all the user's data (e.g., name, email, etc.) into the database.
- Ensured that the password is stored securely and not in plain text.

## How It Works

- During the signup process, the user's password is hashed using bcrypt.
- The hashed password is then stored in the database along with other user details like name and email.
- When the user logs in, the password provided is compared with the hashed password in the database for authentication.

This ensures that sensitive user data, especially the password, is stored securely.