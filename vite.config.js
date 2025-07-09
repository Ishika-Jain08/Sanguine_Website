import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"

dotenv.config();
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: process.env.VITE_APP_PORT? parseInt(process.env.VITE_APP_PORT) : 5173, 
  },
})
