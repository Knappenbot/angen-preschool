import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Knappenbot.github.io',
  base: '/angen-preschool',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
