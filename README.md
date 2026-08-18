# makeUGCads

An AI-powered platform for creating engaging UGC (User-Generated Content) advertisements.

## 🚀 Overview

**AdCraft AI** is a full-stack web application designed to simplify the process of creating UGC-style advertisements using AI.

The application provides a modern web interface where users can interact with the platform, while the backend handles authentication, API requests, AI-powered processing, media management, and database operations.

## ✨ Features

* 🤖 AI-powered UGC ad generation
* 🔐 User authentication and authorization
* 🎨 Modern and responsive UI
* 📁 Media upload and management
* ☁️ Cloud-based media storage
* 🗄️ Persistent data storage with PostgreSQL
* ⚡ REST API powered by Express
* 📊 Structured backend architecture
* 🛡️ Error monitoring and application instrumentation

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios
* Framer Motion
* Clerk Authentication
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* Clerk
* Google Gemini / Google GenAI
* Cloudinary
* Multer
* Axios
* Sentry

## 📁 Project Structure

```text
makeUGCads/
│
├── client/                 # Frontend application
│   ├── public/
│   └── src/
│
├── server/                 # Backend application
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── prisma/
│   ├── routes/
│   ├── types/
│   └── server.ts
│
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/akshaydagar21/makeUGCads.git
cd makeUGCads
```

### 2. Setup the Frontend

```bash
cd client
npm install
npm run dev
```

The frontend will start using Vite.

### 3. Setup the Backend

Open another terminal:

```bash
cd server
npm install
npm run start
```

For development with automatic server restarts:

```bash
npm run server
```

## 🔑 Environment Variables

Create the required environment variable files for both the frontend and backend.

The application uses services such as:

* Clerk for authentication
* PostgreSQL for database storage
* Google GenAI for AI functionality
* Cloudinary for media storage
* Sentry for monitoring

Add your own API keys and credentials locally.

> **Never commit `.env` files or API keys to GitHub.**

## 🗄️ Database

The backend uses **PostgreSQL** with **Prisma ORM** for database management.

After configuring the database connection, initialize Prisma according to the project's Prisma configuration.

## 🧠 Architecture

The application follows a separated full-stack architecture:

```text
             ┌──────────────────┐
             │   React Client   │
             │ TypeScript/Vite  │
             └────────┬─────────┘
                      │
                      │ HTTP / REST API
                      ▼
             ┌──────────────────┐
             │  Express Server  │
             │    TypeScript    │
             └────────┬─────────┘
                      │
          ┌───────────┼────────────┐
          │           │            │
          ▼           ▼            ▼
      PostgreSQL   Google GenAI  Cloudinary
       + Prisma
          │
          ▼
       Application
          Data
```

## 🔐 Authentication

Authentication and user management are handled using **Clerk**.

Protected backend routes use authentication middleware to ensure that only authorized users can access protected resources.

## 🤖 AI Integration

The backend integrates Google's GenAI services to provide AI-powered functionality for generating UGC advertisement content.

This allows the platform to automate parts of the creative process instead of requiring users to manually create every component of an advertisement.

## 📦 Available Scripts

### Client

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### Server

```bash
npm run start     # Start backend
npm run server    # Start backend with Nodemon
npm run build     # Compile TypeScript
```

## 🔮 Future Improvements

* Advanced AI-generated video creation
* More customizable ad templates
* Multiple AI model support
* Ad performance analytics
* Social media platform integrations
* Automated video editing
* Improved personalization
* Production deployment and CI/CD

## 👨‍💻 Author

**Akshay Dagar**

GitHub: [@akshaydagar21](https://github.com/akshaydagar21)

---

⭐ If you find this project useful, consider giving it a star!
