import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/App.tsx'),
      name: 'SLPMerchantEntrySdk',
      formats: ['umd'],
      fileName: () => 'index.js',
    },
    outDir: 'dist',
    cssCodeSplit: true,
  },
  plugins: [react()],
})
