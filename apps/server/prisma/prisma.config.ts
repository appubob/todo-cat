import 'dotenv/config'; // Required to load DATABASE_URL from .env
import { defineConfig, env } from 'prisma/config'; 

export default defineConfig({
  // Point to your schema relative to this file
  schema: './prisma/schema.prisma', 
  datasource: {
    url: env('DATABASE_URL'),
  },
});