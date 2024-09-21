
# Chat Application

## Overview
This is a real-time chat application built using ReactJS, NodeJS, Express, and MongoDB. The app supports one-on-one chats, group chats, and allows users to communicate seamlessly in a secure environment. The front end is powered by React, while the back end is handled by Node.js and Express. MongoDB is used for storing chat data. 

The application also features:
- **One-on-One Chats**: Private messaging between two users.
- **Group Chats**: Multiple users can chat in shared rooms.

## Features
- **Real-time Messaging**: Send and receive messages in real time with no delays.
- **One-on-One Chats**: Secure, private conversations between two users.
- **Group Chats**: Create or join group chats with multiple users.
- **User Authentication**: User authentication and authorization using JWT tokens.
- **Responsive UI**: Works on both desktop and mobile devices.
- **Chat Notifications**: Real-time notifications for new messages.
- **Message Persistence**: All chat history is stored securely in MongoDB.

## Technologies Used
- **Frontend**: ReactJS , Chakra UI
- **Backend**: NodeJS, Express
- **Database**: MongoDB
- **WebSocket**: Socket.IO for real-time communication

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (version >= 14.x)
- **MongoDB** (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/navneetshahi14/ChatApplication.git
   cd chat-application
   ```

2. Install dependencies for both frontend and backend:

   For the backend:
   ```bash
   cd server
   npm install
   ```

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   MONGO_URI=<your-mongo-db-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the development servers:
   - **Backend**: 
     ```bash
     cd server
     nodemon
     ```

   - **Frontend**: 
     ```bash
     cd frontend
     npm start
     ```

### Usage
- Open your browser and go to `http://localhost:3000` to access the chat application.
- Register a new account or log in with an existing account.
- Start a one-on-one chat or create/join a group chat.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

![1](https://github.com/user-attachments/assets/f53caac2-7a0a-4508-95d5-c6352c654b2b)
![2](https://github.com/user-attachments/assets/31f559b5-4a71-45e1-a7d2-a9741add29cf)
![4](https://github.com/user-attachments/assets/f0d6f1d8-f594-436e-8a15-82c972155ba6)
![5](https://github.com/user-attachments/assets/6b59c460-38d1-4a64-9e09-aa857801f2c8)
![6](https://github.com/user-attachments/assets/be118164-0939-4f18-8aa8-7f1b1c0b6e12)
![7](https://github.com/user-attachments/assets/2e713dd8-3154-4977-bc61-2d0ccb8abfb8)
![8](https://github.com/user-attachments/assets/19d087e5-23f6-4f06-9236-7b3e32552692)
![9](https://github.com/user-attachments/assets/99857b12-08e8-446c-abf7-6badf14f31e2)
![10](https://github.com/user-attachments/assets/aee80956-8f97-4992-9fb2-6118e4af70f1)
![11](https://github.com/user-attachments/assets/68fde686-b017-440e-addd-b26f5e72e2bc)
![Uploading 12.png…]()













