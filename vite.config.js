{/* <reference types="vitest" />*/}
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // allows using test(), expect() without imports
    environment: 'jsdom', // simulates browser DOM
    setupFiles: './setupTests.js'
  },
});
