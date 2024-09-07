import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // SRC
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@canvas': path.resolve('./src/canvas'),
      '@pages': path.resolve('./src/pages'),
      '@publicPages': path.resolve('./src/pages/public'),
      '@privatePages': path.resolve('./src/pages/private'),

      // PUBLIC
      '@storyset': path.resolve('./public/img/storyset'),
    },
  },
});
