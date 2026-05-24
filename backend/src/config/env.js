import { z } from "zod";
import dotenv from "dotenv";

const result = dotenv.config();

console.log(result);
console.log(process.env.PORT);

const envSchema = z.object({
  PORT: z.string(),

  MONGODB_URI: z.string(),

  JWT_SECRET: z.string(),

  JWT_EXPIRES_IN: z.string(),

  CLOUDINARY_CLOUD_NAME: z.string(),

  CLOUDINARY_API_KEY: z.string(),

  CLOUDINARY_API_SECRET: z.string()
});

export const env = envSchema.parse(process.env);
