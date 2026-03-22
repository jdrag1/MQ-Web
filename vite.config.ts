import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.ogg', '**/*.m4a', '**/*.wav'],
  server: {
    fs: {
      strict: false
    }
  }
})