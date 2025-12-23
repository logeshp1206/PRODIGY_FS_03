# PRODIGY_FS_04 - Chat Wave (Real-Time Chat Application)

## 📌 Task Description
Task 4 involves building a **real-time chat application** using **Node.js**, **Express**, and **Socket.IO (WebSockets)**.  
The project demonstrates instant messaging between multiple users in a public chat room with real-time communication handled by a backend server.

---

## 📂 Project Structure
```

CHAT-WAVE/
│
├── server.js          # Node.js backend server
├── package.json       # Node.js dependencies
├── package-lock.json  # Dependency lock file
├── README.md          # Project documentation
│
└── public/
├── index.html     # Frontend UI
├── style.css      # Styling
├── script.js      # Client-side JavaScript
└── logo.png       # App logo/image (optional)

````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/logeshp1206/CHAT-WAVE.git
cd CHAT-WAVE
````

### 2. Install Node.js dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

The server will start on:

```
http://localhost:3000
```

---

## 🚀 Usage

* Open a browser and go to `http://localhost:3000`
* Enter a username to join the chat
* Open multiple tabs or browsers to test real-time messaging
* Messages are delivered instantly using WebSocket technology

---

## 🧠 How It Works

* The backend uses **Express.js** to serve static frontend files
* **Socket.IO** enables real-time, bidirectional communication
* When a user sends a message, it is broadcast to all connected clients instantly

---

## 🛡️ .gitignore

The following files/folders should be ignored in Git:

```
node_modules/
.env
```

---

## 📖 Notes

* Ensure **Node.js** is installed on your system
* This project uses **CommonJS** syntax for compatibility with VS Code and Windows
* The application works the same in **Replit Preview** and **local VS Code execution**

---

## 🌱 Future Enhancements

* Private one-to-one chat
* User authentication
* Multiple chat rooms
* Message history storage
* Typing indicators

---

## 👨‍💻 Author

Developed by **Logesh**
As part of **Prodigy Internship – Task 4**

```


- align it 100% with **Prodigy FS format**
- add **screenshots section**
- write a **project report or PPT**

Just tell me 👍
```
