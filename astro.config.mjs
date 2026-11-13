import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wumoztw.github.io',
  base: '/my-malay-learning-site/',
  vite: { plugins: [tailwindcss()] },
});
