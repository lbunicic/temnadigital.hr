# CLAUDE.md — temnadigital.hr

## Project Overview

Personal portfolio and blog website for Temna Digital (temnadigital.hr). Single-page application showcasing projects, CV/experience, blog posts, and a contact form with email integration.

**Live site:** https://temnadigital.hr

## Tech Stack

- **Framework:** React 19 with TypeScript
- **Build tool:** Vite 7
- **Styling:** Plain CSS with CSS custom properties (no Tailwind, no CSS modules)
- **Icons:** react-icons
- **Code highlighting:** react-syntax-highlighter
- **Email:** @emailjs/browser
- **Deployment:** GitHub Pages via GitHub Actions
- **Node version:** 20 (as specified in CI)

## Commands

```bash
npm run dev       # Start local dev server with HMR
npm run build     # Production build (outputs to ./dist)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no test commands — the project has no test framework configured.

## Project Structure

```
src/
├── assets/                  # Static assets (PDF, images, SVGs)
├── components/              # React components (flat .tsx files)
│   ├── Navbar.tsx           # Navigation bar with mobile menu + ⌘K trigger
│   ├── LogoMark.tsx         # SVG ◈ logo mark (draws itself in the navbar)
│   ├── Link.tsx             # <a> for in-app routes (client-side navigation)
│   ├── Hero.tsx             # Hero section with live Zagreb clock, typing + counters
│   ├── Projects.tsx         # Bento grid of project tiles (link to /work/<slug>)
│   ├── DeviceMockup.tsx     # Phone/tablet/browser frame (illustration or screenshot)
│   ├── WorkPage.tsx         # Project detail page (/work/<slug>)
│   ├── Portfolio.tsx        # Legacy portfolio grid (not rendered)
│   ├── ProjectGraphics.tsx  # SVG graphic components for project cards
│   ├── CV.tsx               # CV/experience section with PDF download
│   ├── Blog.tsx             # Home blog section (links to /blog/<slug>)
│   ├── BlogIndex.tsx        # All posts page (/blog)
│   ├── BlogPost.tsx         # Article page (/blog/<slug>), lazy-loaded
│   ├── BlogGraphics.tsx     # SVG graphic components for blog posts
│   ├── CodeBlock.tsx        # Syntax-highlighted code blocks (Prism light: dart, swift)
│   ├── Contact.tsx          # Contact info section + copy-email
│   ├── MessageComposer.tsx  # Email composition modal (EmailJS)
│   ├── CommandPalette.tsx   # ⌘K / Ctrl+K command menu
│   ├── Toast.tsx            # Toast live region + showToast/copyToClipboard helpers
│   ├── NotFound.tsx         # 404 page
│   ├── Footer.tsx           # Footer
│   └── ThemeToggle.tsx      # Dark/light theme toggle
├── context/
│   └── ThemeContext.tsx      # Theme state (React Context + localStorage)
├── hooks/
│   ├── useRouter.ts         # Minimal History API router (usePathname, navigate)
│   ├── useScrollReveal.ts   # IntersectionObserver scroll-reveal classes
│   ├── useCardSpotlight.ts  # Cursor-following spotlight vars on cards
│   └── useSvgGraphics.ts    # Card graphics: draw-in on reveal, animate only on hover
├── data/
│   ├── siteMeta.ts          # Plain-data source of truth: site info, posts, projects, routes
│   ├── graphics.tsx         # Slug → SVG graphic maps for projects and posts
│   └── blogPosts.tsx        # Article bodies (JSX) keyed by slug
├── App.tsx                  # Root component — route switch, section scroll logic, ⌘K
├── App.css                  # App-specific style overrides (minimal)
├── index.css                # Global styles (~3,500 lines) — theming, layout, components
├── main.tsx                 # Entry point — renders App inside ThemeProvider
└── vite-env.d.ts            # Vite TypeScript declarations
```

### Other key files

```
.github/workflows/deploy.yml  # CI/CD: build + deploy to GitHub Pages on push to main
CNAME                          # Custom domain: temnadigital.hr
vite.config.ts                 # Vite config (React plugin, base: '/')
tsconfig.app.json              # App TS config (strict mode, ES2020, react-jsx)
tsconfig.node.json             # Node TS config for build tooling
eslint.config.js               # ESLint flat config
index.html                     # HTML entry point (loads /src/main.tsx)
```

## Architecture & Conventions

### Component patterns

- Functional components only (no class components).
- Components are in `src/components/` as flat `.tsx` files — no nested folders per component.
- State management uses React's built-in hooks (`useState`, `useEffect`, `useContext`). No Redux or external state library.
- Theme context (`ThemeProvider` / `useTheme`) wraps the entire app and persists to localStorage.
- Routes (see `App.tsx`): `/` (home sections), `/blog`, `/blog/<slug>`, `/work/<slug>`, anything else → `NotFound`. Home is `Navbar > Hero > Projects > CV > Blog > Contact > Footer` with scroll-based active section tracking.
- Routing is a small custom History API router (`src/hooks/useRouter.ts`), no react-router. Use `<Link to>` for in-app links and `navigate(path, { section })` to reach a home section from another page. Paths are normalized without a trailing slash.
- Project tiles morph into the detail page via the View Transitions API: the clicked tile gets `.vt-active` and `.work-hero` shares its `view-transition-name` only while `html.vt-route` is set.

### Styling

- All styles live in `src/index.css` (global) and `src/App.css` (minimal overrides).
- CSS custom properties define the design system:
  - `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--bg-card`
  - `--text-primary`, `--text-secondary`, `--text-tertiary`
  - `--accent-primary`, `--accent-secondary`, `--accent-tertiary`, `--accent-glow`
  - `--border-color`, `--border-hover`, `--shadow-sm/md/lg/glow`
  - `--radius-sm/md/lg/xl`
  - `--font-primary` (Outfit), `--font-mono` (JetBrains Mono)
  - `--transition-fast` (0.15s), `--transition-normal` (0.25s), `--transition-slow` (0.4s)
- Theme switching via `data-theme="dark"` / `data-theme="light"` attribute on `<html>`.
- Monochromatic design — no bright accent colors.
- Responsive design using CSS media queries.

### Content management

- All content is static and lives in TypeScript/TSX files:
  - Site info, post metadata and project data: `src/data/siteMeta.ts` (must stay plain data — `vite.config.ts` imports it at build time)
  - Blog post bodies: `src/data/blogPosts.tsx` (`postContent` keyed by slug)
  - Contact info: `SITE` in `siteMeta.ts`, plus hardcoded bits in `CV.tsx` and `Contact.tsx`
  - `SITE.availability` (null by default) adds an availability note next to the hero clock
- No CMS, no database, no API backend.

### TypeScript

- Strict mode enabled (`strict: true` in tsconfig.app.json).
- `noUnusedLocals` and `noUnusedParameters` are enforced.
- Target: ES2020. Module: ESNext with bundler resolution.
- Type definitions provided for react-syntax-highlighter via `@types/react-syntax-highlighter`.

### ESLint

- Flat config format (`eslint.config.js`).
- Targets `.js` and `.jsx` files (note: does not currently lint `.ts`/`.tsx` explicitly, though TypeScript handles type checking).
- Plugins: `react-hooks` (recommended), `react-refresh` (vite config).
- Custom rule: `no-unused-vars` ignores identifiers starting with uppercase or underscore.
- Ignores `/dist` directory.

## Deployment

- **Platform:** GitHub Pages
- **Trigger:** Pushes to `main` branch or manual workflow dispatch
- **Pipeline:** `.github/workflows/deploy.yml`
  1. Checkout code
  2. Setup Node.js 20 with npm cache
  3. `npm ci` to install dependencies
  4. `npm run build` to produce `./dist`. The `prerender-routes` plugin in `vite.config.ts` then writes `dist/<route>/index.html` for every route with its own `<title>`/Open Graph tags (link previews don't run JS), `404.html` (GitHub Pages fallback that boots the app), `sitemap.xml` and `robots.txt`. The head block between the `route-meta` markers in `index.html` is replaced per route.
  5. Upload and deploy to GitHub Pages
- **Custom domain:** `temnadigital.hr` (via CNAME file)

## Working with This Codebase

### Adding a new section

1. Create a new component in `src/components/YourSection.tsx`.
2. Add it to the layout in `App.tsx` between existing sections.
3. Add the section id to the `sections` array in the `handleScroll` effect in `App.tsx` for scroll tracking.
4. Add a nav link in `Navbar.tsx`.
5. Add styles in `src/index.css`.

### Adding a new blog post

1. Add its metadata to `posts` in `src/data/siteMeta.ts` (`slug`, `title`, `excerpt`, `category`, `date`, `readTime`, `author`, optional `originalLink`, `featured`). The slug becomes the public URL `/blog/<slug>` — don't change it once deployed.
2. Add the article JSX to `postContent` in `src/data/blogPosts.tsx` under the same slug. Code blocks: `<CodeBlock language="dart">`; register any new language in `CodeBlock.tsx`.
3. Optionally add a graphic in `BlogGraphics.tsx` and map it in `src/data/graphics.tsx`.
4. Add a 1200×630 share image at `public/og/blog-<slug>.png` (referenced automatically by `getRoutes()`).

### Adding a new project

1. Add an entry to `projects` in `src/data/siteMeta.ts` with a permanent `slug` (URL `/work/<slug>`), `device` (`phone`/`tablet`/`browser`) and optionally `size: 'xl' | 'wide'` for a larger bento tile, `metrics`, `image` (real screenshot under `public/`) and `caseStudy` sections (each renders only when filled in).
2. Optionally add a graphic in `ProjectGraphics.tsx` and map it in `src/data/graphics.tsx`.

### EmailJS integration

- Service ID and template ID are hardcoded in `MessageComposer.tsx`.
- Uses `@emailjs/browser` for client-side email sending.
- No environment variables — credentials are in source code.

## Things to Know

- No testing framework exists. There are no unit, integration, or E2E tests.
- No Prettier or auto-formatting configuration. Follow existing code style.
- No pre-commit hooks (no Husky/lint-staged).
- No i18n — content is English only.
- The `index.css` file is large (~3,500 lines) and contains all component styles in a single file.
- `ProjectGraphics.tsx` is the largest component (~800 lines) due to inline SVG definitions.
- To test routing like GitHub Pages does, serve the build with a plain static server (`python3 -m http.server -d dist`); `vite preview` adds its own SPA fallback and hides missing prerendered routes.
- The ESLint config targets `.js/.jsx` file globs but the project uses `.ts/.tsx` — TypeScript strict mode provides the type checking safety net.
