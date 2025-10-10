"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./modules/user/user.routes");
const blog_routes_1 = require("./modules/blog/blog.routes");
const project_routes_1 = require("./modules/project/project.routes");
const skill_routes_1 = require("./modules/skill/skill.routes");
const education_routes_1 = require("./modules/education/education.routes");
const experience_routes_1 = require("./modules/experience/experience.routes");
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
// Middleware
// app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use((0, compression_1.default)()); // Compresses response bodies for faster delivery
app.use(express_1.default.json()); // Parse incoming JSON requests
app.use((0, cors_1.default)({
    // origin: "http://localhost:3000",
    origin: "https://munna-mia.vercel.app",
    credentials: true,
}));
app.use("/api/v1/user", user_routes_1.userRouter);
app.use("/api/v1/blog", blog_routes_1.blogRouter);
app.use("/api/v1/project", project_routes_1.projectRouter);
app.use("/api/v1/skill", skill_routes_1.skillRouter);
app.use("/api/v1/education", education_routes_1.educationRouter);
app.use("/api/v1/experience", experience_routes_1.experienceRouter);
app.use("/api/v1/auth", auth_routes_1.AuthRouter);
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
exports.default = app;
