# Audio Transcription App – Backend

A **Node.js + Express.js** backend service for the **Audio Transcriptions Application**.
This backend provides REST APIs for creating an audio transcriptions, and fetch list of audio transcriptions with proper validation, API documentation, and MongoDB integration.

---
## 🚀 Features

- **Audio Transcription**
  - Create an audio transcription
  - Fetch list of transcriptions

## 🛠️ Tech Stack`

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Joi** (validation)
- **Swagger** (API docs)
- **Morgan** (logging)
- **Nodemon** (dev mode)
- **CORS**
- **UUID**
- **Dotenv**

---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/shubh1998/Audio_Transcriptions_FullStack_App.git
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory with the following values:

```env
NODE_PORT=3001
NODE_MONGO_DB_URL=mongodb://localhost:27017/test
```

### 4. Run the Server
```bash
npm run dev
```
Server will start at: 👉 [http://localhost:3001](http://localhost:3001)

Swagger API Docs: 👉 [http://localhost:3001/api/v1/doc](http://localhost:3001/api/v1/doc)

---

## 📦 Available Commands

| Command            | Description                                    |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | Start the server in development mode (nodemon) |
| `npm run lint`     | Run ESLint checks                              |
| `npm run lint:fix` | Fix linting issues automatically               |

---

## 📄 API Routes

### **Base URL** → `/api/v1/`

### Other Routes
- `GET /health-check` → Health check test route
- `GET /api/v1/demo` → Demo service route
- `GET /api/v1/doc` → Swagger API documentation

---

## 🔗 API Endpoints Overview

| Method | Endpoint                        | Description                |
| ------ | ------------------------------- | -------------------------- |
| POST   | `/audio-transcription/create`   | Create Audio Transcription |
| GET    | `/audio-transcription/list`     | Lists Audio Transcription |

---

## 📌 Repository

GitHub Repo → [Audio Transcription App Backend](https://github.com/shubh1998/Audio_Transcriptions_FullStack_App/tree/main/backend)

---

## 👨‍💻 Developer

**Shubham Gupta**
- [LinkedIn](https://www.linkedin.com/in/shubhamgupta9891/)
- [GitHub](https://github.com/shubh1998)
