import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // here after react we can call tailwind, first we should install tailwind and then import then call it in the array
})
