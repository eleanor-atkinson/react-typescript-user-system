
# User System React App

This ongoing project is a simple web application built with a React frontend and an Express server on the backend. The purpose of this project is to practice using TypeScript to model user relationships in a React app by implementing essential user features, including user registration, login, and profile management.

## Features

- **User Registration:** Allows users to register by providing a username, email, and password.
- **User Login:** Users can log in with their credentials to access their profile and other features.
- **User Profile:** Displays user-specific data, such as username and email, retrieved from the database.

## Tech Stack

- **Frontend:**
  - React (with TypeScript)
  - Axios for making HTTP requests
  - React Router for page navigation

- **Backend:**
  - Express (with TypeScript)
  - MongoDB (with Mongoose for database modeling)
  - Socket.io for real-time features ( planned for future expansion)

## Getting Started

### Prerequisites

- **Node.js** installed (v14.x or higher)
- **MongoDB** installed or a connection to MongoDB Atlas
- **npm** or **yarn** installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-typescript-user-system.git
   cd react-typescript-user-system
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Install backend dependencies
   cd server
   npm install
   
   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the `server` directory to configure environment variables:

   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/user_profiles
   CLIENT_URL=http://localhost:3000
   PORT=8000
   ```

4. Start the backend server:

   ```bash
   # From the root of the project
   npx ts-node server/index.ts
   ```

5. Start the React frontend:

   ```bash
   cd client
   npm run start
   ```

The server should be running on `http://localhost:8000`, and the frontend will be available on `http://localhost:3000`.

## Project Purpose

The main goal of this project is to practice using **TypeScript** to model user relationships and manage user features in a web application. The following features are being implemented:

- User registration
- User login (in progress)
- User profile management (in progress)

## Future Enhancements

- **User Authentication:** Add JWT-based authentication to secure the user login feature.
- **Channel Subscription:** Allow users to follow channels and post questions on specific topics.
- **Real-time Messaging:** Integrate Socket.io for real-time communication between users.
- **Additional Features:** Such as password recovery, email verification, etc.
