# Repository Guidelines

## Project Structure & Module Organization
Astro routes live in `src/pages`, while reusable UI goes into `src/components` and shared wrappers in `src/layouts`. Markdown content is organized under `src/content/{blog,projects,work}` with schemas defined in `src/content/config.ts`. Utilities sit in `src/lib`, shared types in `src/types.ts`, and design tokens in `src/styles`. Place static assets in `public`; Astro and Vite handle hashed URLs automatically, so reference them with `/…` paths.

## Build, Test, and Development Commands
- `pnpm install`: Sync dependencies before any change.
- `pnpm dev` (or `pnpm dev:network` for LAN access): Hot-reload development server.
- `pnpm build`: Runs `astro check` for type-safe content, then performs a production build.
- `pnpm preview` (or `pnpm preview:network`): Serves the built site for smoke testing.
- `pnpm lint` / `pnpm lint:fix`: Enforces ESLint, Astro, and TypeScript rules.

## Coding Style & Naming Conventions
Use TypeScript by default and prefer functional components. Follow the two-space indentation used throughout `src/pages/index.astro`. Components and layouts are PascalCase (e.g., `ArrowCard.astro`), content slugs are lowercase with hyphens (see `src/content/blog/slack-serverless-notification.md`), and constants live in `src/consts.ts`. Keep Tailwind classes concise and leverage `clsx` and `tailwind-merge` for conditional styling to avoid duplicates.

## Testing Guidelines
No automated test suite exists yet, so rely on `pnpm lint`, `astro check`, and a full `pnpm build` before opening a PR. Manually verify rendered pages via `pnpm preview` and confirm key routes (`/`, `/blog`, `/projects`) load without console errors. Include reproduction steps for regressions and consider adding unit tests if you introduce complex logic under `src/lib`.

## Commit & Pull Request Guidelines
Match the existing Conventional Commit format (`feat:`, `fix:`, etc.) and keep messages scoped to a single change. For PRs, provide a concise summary, link related issues, and note any content collections touched. Attach before/after screenshots or GIFs for visual changes. Confirm the PR checklist: dependencies installed, `pnpm lint` and `pnpm build` pass, and preview screenshots updated when assets change.
