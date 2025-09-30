import compression from "compression";
import cors from "cors";
import express from "express";
import { userRouter } from "./modules/user/user.routes";
import { blogRouter } from "./modules/blog/blog.routes";
import { projectRouter } from "./modules/project/project.routes";
import { skillRouter } from "./modules/skill/skill.routes";
import { educationRouter } from "./modules/education/education.routes";


const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/education", educationRouter);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});


// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;