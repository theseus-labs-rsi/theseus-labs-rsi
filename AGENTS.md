# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Theseus Lab website, built with React 19, TypeScript, and Vite.

- `index.html` is the single site entry. `src/main.tsx` mounts the application; `src/App.tsx` contains the homepage, report detail page, and hash-based navigation.
- `src/components/CommunityComments.tsx` contains the scrolling RSI perspectives and their nicknames.
- `src/data/research.ts` defines `ResearchItem` and research/blog records. The first record supplies the featured report and detail page; subsequent records populate the project list.
- `src/styles.css` holds the light-gray theme, global styles, and responsive layouts.
- `public/brand/` contains SVG branding; `public/research/` contains report images and PDFs.
- `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages. `dist/` is generated output.

## Build, Test, and Development Commands

Use Node.js 22 to match CI and npm with the committed `package-lock.json`.

- `npm ci`: install dependencies from the lockfile.
- `npm run dev`: start the Vite development server.
- `npm run build`: check TypeScript and build the production site into `dist/`.
- `npm run preview`: serve the production build locally after building.

## Coding Style & Naming Conventions

Follow the existing two-space indentation, single-quoted TypeScript strings, omitted JavaScript semicolons, and trailing commas in multiline structures. Use PascalCase for React components and types, camelCase for functions and variables, and kebab-case for CSS classes and research slugs, such as `rsi-survey-2026`.

Keep TypeScript strict checks passing, remove unused declarations, and use explicit type imports. Reuse CSS custom properties for colors. No ESLint or Prettier configuration is currently provided; match surrounding code. Keep site copy English-first and preserve semantic HTML, accessible labels, and image alternatives.

## Testing Guidelines

There is currently no automated test framework or coverage threshold. Run `npm run build` before submitting changes. Inspect the homepage on desktop and mobile, check navigation between `#/` and `#/research/rsi-survey-2026`, and verify section anchors, scrolling comments, images, PDF links, and external links. Public assets use relative paths such as `./brand/` and `./research/`.

## Commit & Pull Request Guidelines

Recent commits use concise imperative subjects prefixed with `feat:`, `fix:`, or `docs:`, for example `fix: support GitHub Pages project paths`. Follow this convention and keep commits focused.

PRs should explain the change, link relevant issues, list validation performed, and include screenshots for visual changes. Changes pushed to `main` trigger deployment. Preserve Vite’s relative `base: './'` and relative public-asset URLs so GitHub Pages project paths continue working. Do not commit dependencies, build output, or secrets.
