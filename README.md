# Sunken Academy

An Astro-based interface study built around the feeling of an old abandoned school beneath the sea: tarnished brass, thick glass, dim institutional hallways, archival typography, water-caustic overlays and slow directional movement.

## Structure

The landing page has three distinct zones:

- a large top section with a primary image doorway
- a middle section with a main panel and a separate vertical side pillar
- a long-scroll lower section with alternating image-led entries

Each image opens a fully separate Astro page. Navigation transitions move the current layout up, down, left or right before the next page arrives. A fixed **Home** control remains available on every page.

## Background media

The underwater feeling is deliberately separated from the background asset. The layout applies glass, tint, vignette and moving caustic layers over the media, so later the backdrop can be replaced with:

- JPG / PNG / WebP
- animated GIF
- MP4
- WebM

without rebuilding the visual treatment.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output directory: `dist`

## Cloudflare Pages

This repository is intentionally static and requires no server runtime.

- Build command: `npm run build`
- Build output directory: `dist`
- Node: 22 or current supported LTS

The Astro config automatically uses `/` as its base path outside GitHub Actions, making the same repository suitable for a normal Cloudflare Pages domain or custom domain.

## GitHub Pages

A Pages workflow is included at `.github/workflows/pages.yml`. During GitHub Actions builds, Astro automatically switches its base path to `/underwater-school-aesthethic/`.

Enable **Settings → Pages → Source → GitHub Actions** once for the repository, and pushes to `main` will build and deploy the site.

## Photography

The current prototype uses free Unsplash photography. Credits and source links are available in the site's `/credits/` page. The photography is intentionally external and replaceable; the reusable work here is the interface, glass treatment, typography, layout and motion system.
