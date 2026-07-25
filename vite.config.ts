import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deployed as a GitHub *user* site (Adedayo19.github.io), so the app is served
// from the domain root. If you move it to a project repo, set base to '/<repo>/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
