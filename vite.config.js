
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

export default {
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
    },
  },
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
};
