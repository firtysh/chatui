import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    manifest: {
      "theme_color": "#FAF9F4",
      "background_color": "#FAF9F4",
      "scope": "/",
      "start_url": "/",
      "name": "chatui",
      "short_name": "chatui",
      "description": "Ui for chat app",
      "icons": [
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ],
    }
  })],
})
