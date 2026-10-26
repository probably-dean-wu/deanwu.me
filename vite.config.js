import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keeps the old commands and folders: `npm start` serves on port 3000, `npm run build` writes to build/.
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  build: { outDir: 'build' },
});
