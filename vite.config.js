import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
// vite
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'production'
            ? `http://0.0.0.0:${process.env.PORT}`
            : 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
