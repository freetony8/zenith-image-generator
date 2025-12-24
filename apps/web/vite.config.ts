import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // Security: Restrict CORS in development
    // Only allow requests from same origin by default
    cors: false,
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // ↓↓↓ 新增这一行：强制指向 shared 包的源码目录
      '@z-image/shared': path.resolve(__dirname, '../../packages/shared/src'),
    },
  },
})
