import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

const getConfig = ({ command, mode }) => ({
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
});

export default getConfig;

