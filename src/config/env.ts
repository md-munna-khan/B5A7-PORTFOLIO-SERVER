import dotenv from "dotenv";
dotenv.config();

interface EnvConfig {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
  PORT: string;
  BCRYPT_SALT_ROUND: string;
}

// Helper to ensure env variables exist
function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

export const envVars: EnvConfig = {
  CLOUDINARY_CLOUD_NAME: getEnvVar("CLOUDINARY_CLOUD_NAME"),
  CLOUDINARY_API_KEY: getEnvVar("CLOUDINARY_API_KEY"),
  CLOUDINARY_API_SECRET: getEnvVar("CLOUDINARY_API_SECRET"),
  BCRYPT_SALT_ROUND: getEnvVar("BCRYPT_SALT_ROUND", "10"), // default 10 if not provided
  PORT: getEnvVar("PORT", "5000"), // default 5000 if not provided
};

