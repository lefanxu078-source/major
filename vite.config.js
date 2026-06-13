import typescript from '@rollup/plugin-typescript'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: false,
  optimizeDeps: {
    noDiscovery: true
  },
  plugins: [
    react(),
    typescript({
      jsx: 'react-jsx',
      noEmit: false,
      outDir: undefined
    })
  ],
  build: {
    minify: false
  }
})
