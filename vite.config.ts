import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/stores')
    }
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Pinia"
        }
      }
    })
  ],
})
