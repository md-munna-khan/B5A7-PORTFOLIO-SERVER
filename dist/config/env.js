"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Helper to ensure env variables exist
function getEnvVar(key, defaultValue) {
    const value = process.env[key] || defaultValue;
    if (!value)
        throw new Error(`Missing required environment variable: ${key}`);
    return value;
}
exports.envVars = {
    CLOUDINARY_CLOUD_NAME: getEnvVar("CLOUDINARY_CLOUD_NAME"),
    CLOUDINARY_API_KEY: getEnvVar("CLOUDINARY_API_KEY"),
    CLOUDINARY_API_SECRET: getEnvVar("CLOUDINARY_API_SECRET"),
    BCRYPT_SALT_ROUND: getEnvVar("BCRYPT_SALT_ROUND", "10"), // default 10 if not provided
    PORT: getEnvVar("PORT", "5000"), // default 5000 if not provided
};
