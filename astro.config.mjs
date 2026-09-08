import { defineConfig } from 'astro/config';

const onGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: onGitHubPages ? 'https://thanks-cohn.github.io' : undefined,
  base: onGitHubPages ? '/underwater-school-aesthethic' : '/',
  output: 'static',
  trailingSlash: 'always'
});
