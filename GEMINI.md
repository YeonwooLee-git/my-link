# Project: 마이링크 (My-Link)

## Project Overview
마이링크(My-Link)는 사용자가 흩어져 있는 자신의 SNS, 블로그, 포트폴리오 링크를 하나의 페이지로 통합하여 관리하고 공유할 수 있는 서비스입니다.

### Key Technologies
- **Framework:** Next.js 16.2.6 (App Router)
- **Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.x (using `@tailwindcss/postcss`)
- **Language:** TypeScript 5.x
- **Linting:** ESLint 9.x
- **Database:** NoSQL (Sub-collection structure) - *Suggested: Firebase/Firestore*

## Core Functionality (MVP)
- **Authentication:** Google Social Login.
- **Profile Management:** 
    - Auto-assigned `displayName` from Gmail ID prefix.
    - Inline editing for `displayName` and `bio`.
    - `displayName` acts as the URL slug (`mylink.com/@displayName`).
- **Link Management:**
    - Inline editing for titles and URLs.
    - Drag & drop reordering.
    - Automatic favicon fetching via Google Favicon API.
- **UI/UX:**
    - **Admin Dashboard:** Split view with Editor (Left) and Real-time Mobile Preview (Right).
    - **Public Page:** Clean, mobile-first centered layout for link sharing.
- **Theming:** Basic template selection (colors, button styles).

## Data Architecture
### Users (Collection)
- `uid`: Auth ID
- `displayName`: string (Unique, URL slug)
- `bio`: string
- `theme`: string
- `createdAt`: timestamp
- **Links (Sub-collection)**
    - `title`: string
    - `url`: string
    - `order`: number
    - `clicks`: number
    - `isActive`: boolean

## Building and Running
The following commands are defined in `package.json`:

- **Development:** `npm run dev` - Starts the development server.
- **Build:** `npm run build` - Builds the application for production.
- **Start:** `npm run start` - Starts the production server.
- **Lint:** `npm run lint` - Runs ESLint to check for code quality issues.

### Development Conventions

- **File Referencing:** Always reference file paths using the `@` prefix (e.g., `@app/page.tsx`, `@lib/firebase.ts`).

### Architecture & Routing

- **App Router:** The project strictly uses the Next.js App Router (files in `/app`).
- **Layouts:** `app/layout.tsx` defines the root layout.
- **Dynamic Routes:** Public pages use `/@ [displayName]` pattern for user profiles.

### Styling
- **Tailwind CSS 4:** Configuration via `postcss.config.mjs` and the `@tailwindcss/postcss` plugin.
- **Global Styles:** Found in `app/globals.css`.
- **Mobile-First:** Prioritize mobile responsiveness for both public pages and admin preview.

### Important Documentation & Breaking Changes
- **Breaking Changes:** This project uses a version of Next.js that may contain breaking changes. **Always consult the local documentation** in `node_modules/next/dist/docs/` before implementing new features.
- **AI Agent Hint:** If addressing slow client-side navigations, `Suspense` alone may not be sufficient. Export `unstable_instant` from the route. Refer to `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.mdx`.

### Testing & Validation
- Run `npm run lint` before committing changes.
- Add unit/integration tests for critical logic (e.g., URL slug generation, link reordering).
