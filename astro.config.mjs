import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  ...(isGitHubPages && {
    site: 'https://estebanloterohub.github.io',
    base: '/estetica-neira',
  }),
  output: 'static',
  devToolbar: { enabled: false },
});
