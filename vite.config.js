import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The stylesheet is small, so put it straight into the page instead of making the browser fetch it before painting.
const inlineCss = {
  name: 'inline-css',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(html, { bundle }) {
      for (const [file, asset] of Object.entries(bundle)) {
        if (!file.endsWith('.css')) continue;
        html = html.replace(new RegExp(`<link rel="stylesheet"[^>]*href="/${file}"[^>]*>`), () => `<style>${asset.source}</style>`);
        delete bundle[file];
      }
      return html;
    },
  },
};

// Keeps the old commands and folders: `npm start` serves on port 3000, `npm run build` writes to build/.
export default defineConfig({
  plugins: [react(), inlineCss],
  server: { port: 3000 },
  // assetsInlineLimit 0: never bake small images into the JavaScript, which would delay the first paint.
  build: { outDir: 'build', assetsInlineLimit: 0 },
});
