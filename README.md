# User List Management App

## 🚀 Live Demo

🔗 [User List App](https://user-list-ashy.vercel.app)

## 📂 Repository

🔗 [GitHub Repository](https://github.com/sikderfahad/user-list)

---

## 📌 Overview

This is a React-based user management application that integrates with the Reqres API. It allows users to authenticate, view a paginated list of users, and perform CRUD operations (Edit, Delete, and Update) on user data.

---

## ✨ Features

- **Authentication**: Login with email and password.
- **User List**: Display paginated user data.
- **User Actions**:
  - Edit user details.
  - Delete users.
  - Update user information.
- **Client-Side Enhancements**:
  - Search and filter users.
  - Responsive and user-friendly UI.

---

## 🔧 Tech Stack

- **Frontend:** React
- **State Management:** Context API (Optional: Redux)
- **HTTP Requests:** Axios / Fetch API
- **Styling:** Tailwind CSS / Custom CSS
- **Routing:** React Router

---

## ⚙️ API Endpoints Used

- **Login:** `POST /api/login`
- **Get Users:** `GET /api/users?page=1`
- **Update User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`

---

## 📜 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sikderfahad/user-list.git
cd user-list
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Start the Development Server

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:5173`.

---

## 🛠 Features Breakdown

### 1️⃣ Authentication Screen

- Users can log in using the credentials:
  - **Email:** `eve.holt@reqres.in`
  - **Password:** `cityslicka`
- On successful login, a token is stored in local storage, and the user is redirected to the User List page.

### 2️⃣ User List

- Fetches and displays a list of users from the API.
- Supports pagination for navigating through different pages.
- Displays user details including first name, last name, and avatar.

### 3️⃣ Edit, Update, and Delete Users

- **Edit:** Opens a form with pre-filled user data for modification.
- **Update:** Sends updated details to the API.
- **Delete:** Removes the user from the list and updates the UI.

---

## 📌 Additional Features (Bonus)

- 🔍 **Client-side search and filtering** for users.
- 🔄 **Persistent authentication** using local storage.
- 🌐 **Hosted on Vercel** for live access.

---

## ⚠️ Error Handling & Validations

- Displays appropriate messages for API errors.
- Ensures proper form validation for login and edit actions.

---

## 📜 Submission & Notes

- **Source Code:** [GitHub Repository](https://github.com/sikderfahad/user-list)
- **Live Demo:** [User List App](https://user-list-ashy.vercel.app)
- **Tech Used:** React, Axios, Tailwind CSS, React Router

> **Note:** AI assistance was used for optimization, but the core functionality was developed independently.

---

## 📞 Contact

For any queries or suggestions, feel free to reach out!

---

✅ **Thanks Sajedul Islam! 🚀**
