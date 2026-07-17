import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://llamadaatendida.com',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  server: {
    port: 4321,
    host: true
  },

  adapter: cloudflare()
});