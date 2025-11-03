/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: false,
    hmr: true,
  },
  test: {
    globals: true,        // allows using test(), expect() without imports
    environment: 'jsdom', // simulates browser DOM
    setupFiles: './setupTests.js',
  },
});
