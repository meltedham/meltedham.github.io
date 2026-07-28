import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure proper base for GitHub Pages
    // Set base to '/' for root repository or '/repo-name/' for subdirectory
    base: '/',
    outDir: 'dist',
    // Use esbuild for minification (built-in, no extra dependency needed)
    minify: 'esbuild',
    // Security: drop console and debugger in production
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: undefined,
      },
    },
  }
})
