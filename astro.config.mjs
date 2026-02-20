import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: ['.local', '192.168.87.39', 'localhost']
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
});
