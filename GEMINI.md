# Project: my-link

## Project Overview
This is a modern web application built using **Next.js 16**, **React 19**, and **Tailwind CSS 4**. It utilizes the **App Router** for routing and state management.

### Key Technologies
- **Framework:** Next.js 16.2.6 (App Router)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.x (using `@tailwindcss/postcss`)
- **Language:** TypeScript 5.x
- **Linting:** ESLint 9.x

## Building and Running
The following commands are defined in `package.json`:

- **Development:** `npm run dev` - Starts the development server.
- **Build:** `npm run build` - Builds the application for production.
- **Start:** `npm run start` - Starts the production server.
- **Lint:** `npm run lint` - Runs ESLint to check for code quality issues.

## Development Conventions

### Architecture & Routing
- **App Router:** The project strictly uses the Next.js App Router (files in `/app`).
- **Layouts:** `app/layout.tsx` defines the root layout, including font configurations (Geist, Geist Mono) and global styles.

### Styling
- **Tailwind CSS 4:** The project uses the latest version of Tailwind CSS. Configuration is handled via `postcss.config.mjs` and the `@tailwindcss/postcss` plugin.
- **Global Styles:** Found in `app/globals.css`.

### Important Documentation & Breaking Changes
- **Breaking Changes:** This project uses a version of Next.js that may contain breaking changes compared to older versions. **Always consult the local documentation** in `node_modules/next/dist/docs/` before implementing new features or refactoring.
- **AI Agent Hint:** If addressing slow client-side navigations, `Suspense` alone may not be sufficient. You must also export `unstable_instant` from the route. Refer to `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx` for details.

### Testing & Validation
- Currently, there are no explicit test scripts in `package.json`. When adding new features, consider adding unit or integration tests.
- Always run `npm run lint` before committing changes to ensure style consistency.
