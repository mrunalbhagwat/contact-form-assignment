# 📬 Contact Form Assignment

This is a full-stack contact form assignment built using **HTML/CSS/JS** for the frontend and **Node.js + Express + MongoDB** for the backend.

It captures user information via a form and stores it securely in MongoDB. After submission, it displays a success popup.

---

## 🚀 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas

---

## ✅ Features

- Contact form with the following fields:
  - Name
  - Email
  - Mobile Number
  - State (Dropdown)
  - Gender (Radio buttons)
  - Message
- Validates all input fields (HTML + JavaScript)
- On successful submission:
  - Saves data to MongoDB Atlas
  - Displays a popup: “Form submitted successfully.”
- Clean UI based on provided Figma design

---


---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contact-form-assignment.git
cd contact-form-assignment
cd backend
npm install
MONGO_URI=your-mongodb-atlas-connection-uri
PORT=10000
node server.js
cd ../frontend and open index.html
