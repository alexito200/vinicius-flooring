import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { ViteSitemapPlugin } from './plugins/vite-plugin-sitemap';

const SITE_URL = 'https://viniciusflooring.com';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: SITE_URL,
      routes: [
        '/',
        '/services',
        '/plans',
        '/contact',
      ],
      changefreq: 'monthly',
      priority: 0.8,
    }),
  ],
  resolve: {
    alias: {
      'react-helmet-async': fileURLToPath(new URL('./src/lib/react-helmet-async.tsx', import.meta.url)),
    },
  },
});
