import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  server: {
    host: true, // 👈 Allow all network hosts (like ngrok)
    port: 5173,
    strictPort: true, // always use 5173
    cors: true    // ✅ allows all external hosts (including ngrok)
  }
})
