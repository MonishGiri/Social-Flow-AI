# SocialFlow AI 🚀

An AI-Powered Social Media Automation Platform that helps users create, manage, and schedule social media content with AI-generated captions and hashtags.

Built using React, Node.js, MongoDB, Cloudinary, and Ollama.

---

## 📖 Overview

SocialFlow AI enables creators and businesses to automate content creation and scheduling while leveraging AI to generate engaging captions and hashtags.

The application follows production-grade software engineering practices:

- Feature-Based Frontend Architecture
- Controller-Service-Repository Pattern
- Standardized API Responses
- Centralized Error Handling
- JWT Authentication
- Cloudinary Media Storage
- AI Integration with Ollama
- Scalable Folder Structure

---

## ✨ Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

### Post Management

- Create Post
- Update Post
- Delete Post
- View Posts
- Upload Images
- Schedule Posts

### AI Features

- AI Caption Generation
- AI Hashtag Generation
- Ollama Integration

### Dashboard

- Total Posts
- Scheduled Posts
- Published Posts

### Scheduler

- Automatic Post Publishing
- Cron-Based Scheduling

---

## 🏗️ Architecture

```text
Frontend (React)
        │
        ▼
Backend (Express)
        │
 ┌──────┼─────────┐
 ▼      ▼         ▼

MongoDB Cloudinary Ollama
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Redux Toolkit
- React Router DOM
- TanStack Query
- Axios
- React Hook Form
- Zod
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- BcryptJS
- Multer
- Cloudinary
- Node Cron

### AI

- Ollama
- Llama 3

---

## 📂 Folder Structure

### Backend

```text
backend/
└── src/
    ├── config/
    ├── constants/
    ├── controllers/
    ├── services/
    ├── repositories/
    ├── routes/
    ├── middlewares/
    ├── models/
    ├── cron/
    ├── utils/
    │   ├── ApiResponse.js
    │   ├── ApiError.js
    │   ├── asyncHandler.js
    │   └── logger.js
    └── app.js
```

### Frontend

```text
frontend/
└── src/
    ├── app/
    ├── routes/
    ├── layouts/
    ├── features/
    ├── services/
    ├── store/
    ├── hooks/
    ├── pages/
    ├── components/
    ├── utils/
    └── constants/
```

---

## 🗄️ Database Schema

### User Collection

```javascript
{
  _id,
  name,
  email,
  password,
  avatar,
  createdAt,
  updatedAt
}
```

### Post Collection

```javascript
{
  _id,
  userId,
  imageUrl,
  cloudinaryId,
  caption,
  aiCaption,
  hashtags,
  status,
  scheduledTime,
  publishedTime,
  createdAt,
  updatedAt
}
```

---

## 🔄 Post Lifecycle

```text
Draft
  │
  ▼
Scheduled
  │
  ▼
Published
```

---

## 📡 API Response Standards

All APIs return a standardized response format.

### Success Response

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": {}
}
```

### Created Response

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Post created successfully",
  "data": {
    "id": "6834f5b6e7"
  }
}
```

### Error Response

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Operation failed",
  "errors": {}
}
```

### Validation Error

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation Failed",
  "errors": {
    "email": "Email is required",
    "password": "Password must be at least 8 characters"
  }
}
```

### Unauthorized Error

```json
{
  "success": false,
  "statusCode": 401,
  "message": "Unauthorized Access",
  "errors": null
}
```

### Not Found Error

```json
{
  "success": false,
  "statusCode": 404,
  "message": "Resource not found",
  "errors": null
}
```

### Internal Server Error

```json
{
  "success": false,
  "statusCode": 500,
  "message": "Internal Server Error",
  "errors": null
}
```

---

## 🔐 Authentication Flow

```text
User Login
     │
     ▼
Validate Credentials
     │
     ▼
Generate JWT
     │
     ▼
Return Token
     │
     ▼
Protected API Access
```

---

## 🤖 AI Workflow

```text
User Input
     │
     ▼
AI Service
     │
     ▼
Ollama
     │
     ▼
Generate Caption
     │
     ▼
Generate Hashtags
     │
     ▼
Return Response
```

---

## ☁️ Upload Workflow

```text
Frontend
    │
    ▼
Express Server
    │
    ▼
Multer
    │
    ▼
Cloudinary
    │
    ▼
MongoDB
```

---

## ⏰ Scheduler Workflow

```text
Create Scheduled Post
        │
        ▼
Save To MongoDB
        │
        ▼
Cron Job Executes
        │
        ▼
Find Due Posts
        │
        ▼
Publish Post
        │
        ▼
Update Status
```

---

## 🚀 Future Enhancements

### AI

- Gemini Integration
- Multiple AI Providers
- Content Suggestions
- Best Posting Time Recommendations

### Social Platforms

- LinkedIn Integration
- Instagram Integration
- Twitter/X Integration
- Facebook Integration

### Collaboration

- Role-Based Access Control (RBAC)
- Team Workspaces
- Approval Workflow

### Infrastructure

- Redis
- BullMQ
- Docker
- CI/CD Pipeline
- AWS Deployment

---

## 📋 Development Phases

### Phase 1

- Project Setup
- Architecture Setup
- Authentication
- API Standards

### Phase 2

- Post CRUD
- Cloudinary Upload
- Protected Routes

### Phase 3

- Ollama Integration
- Caption Generation
- Hashtag Generation

### Phase 4

- Scheduler
- Dashboard
- Analytics

### Phase 5

- Testing
- Deployment
- Documentation

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full Stack Development
- REST API Design
- Authentication & Authorization
- AI Integration
- Cloudinary Storage
- Database Design
- Scheduler Implementation
- Production-Grade Error Handling
- Scalable Project Architecture
- Modern React Best Practices

---

## 👨‍💻 Author

**Monish Giri**

Software Engineer

### Skills

- React.js
- Node.js
- JavaScript
- Java
- Spring Boot
- MongoDB

---

## 📄 License

MIT License
