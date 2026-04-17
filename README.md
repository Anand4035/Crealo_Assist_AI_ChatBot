# Crealo_Assist_AI_ChatBot
Crealo Assist is a real-time AI chatbot powered by LLaMA via Groq, designed for fast and interactive conversations. It features streaming responses, modern UI, and seamless frontend-backend integration. The project demonstrates full-stack AI development with a focus on performance and user experience.
# 🚀 Crealo Assist — AI Chatbot

Crealo Assist is a modern AI-powered chatbot that delivers **real-time, interactive conversations** using **LLaMA models via Groq**, combined with a sleek and responsive frontend.

---

## 🔍 Overview

Crealo Assist is designed to simulate a **production-level AI chat experience** with:

- ⚡ Fast responses using Groq inference
- 💬 Real-time streaming replies
- 🎨 Modern UI with glassmorphism design
- 🌗 Dark/Light theme support

This project focuses not only on AI integration but also on **user experience, performance, and full-stack architecture**.

---

## ⚙️ Tech Stack

### 🧠 AI
- LLaMA (via Groq API)

### 🐍 Backend
- Python
- FastAPI
- StreamingResponse (real-time output)

### 🌐 Frontend
- HTML
- CSS (Glassmorphism + Dark Theme)
- JavaScript (Fetch API + Streaming)

---

## ✨ Features

- ✅ Real-time streaming responses (typing effect)
- ✅ “AI is typing…” animation
- ✅ Dark / Light theme toggle
- ✅ Modern glass UI design
- ✅ Smooth frontend ↔ backend integration
- ✅ Auto-scroll chat experience

---

## 📂 Project Structure


Crealo-Assist/
│
├── backend/
│ ├── main.py
│ └── requirements.txt
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/crealo-assist.git
cd crealo-assist

##2️⃣ Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt

Run server:

uvicorn main:app --reload

##3️⃣ Frontend Setup
Open frontend/index.html
Or run using Live Server (VS Code)
🔗 API Endpoint
POST /chat

Request:

{
  "message": "Hello"
}

Response:

Streamed text response (real-time)
🧠 How It Works
User sends a message from frontend
Request is sent to FastAPI backend
Backend calls Groq API (LLaMA model)
Response is streamed back chunk-by-chunk
Frontend displays text with typing effect
💡 Key Learnings
Implementing real-time streaming with FastAPI
Handling async communication
Designing interactive UI/UX
Integrating AI models into web applications
##🚀 Future Improvements
🎤 Voice input & output
🧠 Context-aware memory
🌍 Deployment (Docker / Cloud)
📱 Mobile responsiveness
🔐 Authentication system
🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

📬 Contact

If you have feedback or suggestions, feel free to connect!
