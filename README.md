# Jio Saavn Website Clone

This project is a clone of the Jio Saavn music streaming platform, built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes user authentication, playlist search, song selection, and playback features.

**Deployed link:** https://jio-saavn-clone-using-mern-1.onrender.com

## Features

- **Authentication:**
  - Sign up
  - Sign in
  - Logout

- **Playlist Management:**
  - Search for playlists
  - Fetch playlist details
  - Select and play songs from a playlist

- **Music Playback:**
  - Play, pause, and skip tracks
  - Seek the current track
  - Display current playing track details
  - Volume Manager and mute/unmute feature


## Technologies Used

- **Frontend:**

    - React
    - React Router (for navigation)
    - Tailwind CSS
- **Backend:**

    - Node.js
    - Express.js
    - MongoDB (for database)
    - JWT (for authentication)
- **Others:**

    - Mongoose (for MongoDB object modeling)
    - bcrypt (for password hashing)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running locally or remotely

### Installation

1. Installing backend dependencies:
    
    Open the terminal in the root directory
    ```bash
    cd backend
    npm i
    ```

2. Installing frontend dependencies:
    
    Open the terminal in the root directory
    ```bash
    cd frontend
    npm i
    ```
    
3. Set up environment variables: 
    
    Create a .env file in the backend folder of the project and add the following variables:
    ```
    MONGODB_URI = <your_mongodb_connection_uri>
    JWT_SECRET = <your_jwt_secret>
    ```

4. Starting backend:

    Open the terminal in the root directory
    ```bash
    cd backend
    nodemon app
    ```
    If ```nodemon app``` is returning an error, then either change the execution policy to unrestricted in Windows Powershell, or use the following commands in the root directory:
    
    ```bash
    cd backend
    node app
    ```
    
5. Starting frontend:

    Open the terminal in the root directory
    ```bash
    cd frontend
    npm run dev
    ```