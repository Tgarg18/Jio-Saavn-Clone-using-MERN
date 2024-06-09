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
 
- **UI Design:**
  - Dark/Light Theme
  - Responsive Design

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

1. Installing backend dependencies and setting up backend environment variables:
    
    Open the terminal in the backend directory
    ```bash
    npm i
    ```
    
    Create ".env" file in the backend folder and create the following variables:
    ```
    MONGODB_URI = <your_mongodb_connection_uri>
    JWT_SECRET = <your_jwt_secret>
    ```

2. Installing frontend dependencies and setting up frontend environment variables:
    
    Open the terminal in the frontend directory
    ```bash
    npm i
    ```
    
    Create ".env" file in the frontend folder and create the following variables:
    ```
    VITE_BACKEND_URI = <your_backend_url>
    ```
    
3. Starting backend:

    Open the terminal in the backend directory
    ```bash
    nodemon app
    ```
    If ```nodemon app``` is returning an error, then either change the execution policy to unrestricted in Windows Powershell, or use the following commands in the backend directory:
    
    ```bash
    node app
    ```
    
4. Starting frontend:

    Open the terminal in the frontend directory
    ```bash
    npm run dev
    ```

## Contribution

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature-name
    ```

5. Open a pull request
