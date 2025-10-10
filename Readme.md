# 🧠 B5A7 - Portfolio Backend

[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)]()
[![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey?logo=express)]()
[![Prisma](https://img.shields.io/badge/ORM-Prisma-blue?logo=prisma)]()
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)]()
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)]()

🚀 **Live API:** [https://munna-portfolio-server.vercel.app](https://munna-portfolio-server.vercel.app)

---

## 📘 Project Overview

This backend powers the **Munna Portfolio** project — a full-stack portfolio platform that includes:

- **Authentication & Authorization** (JWT-based)
- **Blog Management**
- **Project Management**
- **Skills, Education, and Experience APIs**
- Secure **file uploads** using `multer`
- Clean architecture and modular routing

The backend communicates with a **Next.js frontend** and stores persistent data using **PostgreSQL** with **Prisma ORM**.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| ORM | Prisma |
| Database | PostgreSQL |
| File Upload | Multer |
| Authentication | JWT + bcrypt |
| Middleware | cors, compression, express.json |
| Deployment | Vercel (Serverless Functions) |

---

## 📁 Folder Structure

src/
├── config/
│ └── multer.config.ts
├── modules/
│ ├── auth/
│ │ ├── auth.controller.ts
│ │ ├── auth.routes.ts
│ ├── blog/
│ │ ├── blog.controller.ts
│ │ ├── blog.routes.ts
│ ├── project/
│ │ ├── project.controller.ts
│ │ ├── project.routes.ts
│ ├── skill/
│ ├── education/
│ ├── experience/
│ └── user/
├── app.ts
└── server.ts



---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/portfolio"
JWT_SECRET="your_jwt_secret_key"
PORT=5000
```

Setup Instructions
####  Clone the Repository

git clone https://github.com/md-munna-khan/B5A7-PORTFOLIO-SERVER.git
cd B5A7-PORTFOLIO-SERVER

#### Install Dependencies
```ts
npm install
```
#### Configure Prisma
```
npx prisma generate
npx prisma migrate dev --name init
```
#### Run the Development Server
npm run dev
The server should now be running at:
🔗 http://localhost:5000


#### Authentication Routes
| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| `POST` | `/api/v1/auth/login` | Login with email & password |


#### Blog Routes
| Method   | Endpoint           | Description                              |
| -------- | ------------------ | ---------------------------------------- |
| `POST`   | `/api/v1/blog`     | Create new blog *(requires file upload)* |
| `GET`    | `/api/v1/blog`     | Get all blogs                            |
| `GET`    | `/api/v1/blog/:id` | Get a single blog                        |
| `PATCH`  | `/api/v1/blog/:id` | Update blog *(with file upload)*         |
| `DELETE` | `/api/v1/blog/:id` | Delete a blog                            |

#### Project Routes
| Method   | Endpoint              | Description                                 |
| -------- | --------------------- | ------------------------------------------- |
| `POST`   | `/api/v1/project`     | Create new project *(requires file upload)* |
| `GET`    | `/api/v1/project`     | Get all projects                            |
| `GET`    | `/api/v1/project/:id` | Get single project                          |
| `PATCH`  | `/api/v1/project/:id` | Update project *(with file upload)*         |
| `DELETE` | `/api/v1/project/:id` | Delete project                              |

####  Middlewares Used

- cors – Enable cross-origin requests

- compression – Optimize response size

- express.json() – Parse JSON request bodies

- multer – Handle file uploads

- Error Handling Middleware – Standardized error responses

#### API Base URL
| Environment | URL                                                |
| ----------- | -------------------------------------------------- |
| Local       | `http://localhost:5000/api/v1`                     |
| Production  | `https://munna-portfolio-server.vercel.app/api/v1` |

Admin Credentials (For Testing)
Email: admin@example.com
Password: Admin1234


#### Related Links

🌐 Frontend (Next.js): https://munna-mia.vercel.app

💻 Backend (Express + Prisma): https://munna-portfolio-server.vercel.app

🧑‍💼 GitHub Client Repo: B5A7-PORTFOLIO-CLIENT

⚙️ GitHub Server Repo: B5A7-PORTFOLIO-SERVER