import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // No need to specify root if index.html is in the root directory
  root: '.',
  build: {
    outDir: 'dist', // Output directory for build files
  },
});
