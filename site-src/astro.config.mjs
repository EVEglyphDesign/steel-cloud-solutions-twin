import { defineConfig } from 'astro/config';

// Deployed under /steel-cloud-solutions-twin/site/ on GitHub Pages
export default defineConfig({
  site: 'https://eveglyphdesign.github.io',
  base: '/steel-cloud-solutions-twin/site',
  trailingSlash: 'ignore',
  build: { format: 'directory' }
});
