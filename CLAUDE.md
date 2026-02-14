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
├── components/              # React components (14 files)
│   ├── Navbar.tsx           # Navigation bar with mobile menu
│   ├── Hero.tsx             # Hero section with animated typing + counters
│   ├── Projects.tsx         # Project listing with category/tech filtering
│   ├── Portfolio.tsx        # Portfolio grid with filter UI
│   ├── ProjectGraphics.tsx  # SVG graphic components for project cards
│   ├── CV.tsx               # CV/experience section with PDF download
│   ├── Blog.tsx             # Blog section listing posts
│   ├── BlogPost.tsx         # Modal for displaying a full blog post
│   ├── BlogGraphics.tsx     # SVG graphic components for blog posts
│   ├── CodeBlock.tsx        # Syntax-highlighted code blocks
│   ├── Contact.tsx          # Contact info section
│   ├── MessageComposer.tsx  # Email composition modal (EmailJS)
│   ├── Footer.tsx           # Footer with newsletter signup
│   └── ThemeToggle.tsx      # Dark/light theme toggle
├── context/
│   └── ThemeContext.tsx      # Theme state (React Context + localStorage)
├── data/
│   └── blogPosts.tsx        # Blog post content and metadata
├── App.tsx                  # Root component — section layout + scroll logic
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
- The app is a single-page layout: `Navbar > Hero > Projects > CV > Blog > Contact > Footer`, with scroll-based active section tracking in `App.tsx`.

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
  - Blog posts: `src/data/blogPosts.tsx` (metadata + JSX content)
  - Project data: hardcoded in `src/components/Projects.tsx`
  - Contact info: hardcoded in `CV.tsx` and `Contact.tsx`
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
  4. `npm run build` to produce `./dist`
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

1. Create the post content in `src/data/blogPosts.tsx` following the existing structure:
   - Export a post object with: `id`, `title`, `excerpt`, `category`, `date`, `readTime`, `author`, `graphic` (React component), `content` (JSX).
2. Add the post to the array consumed by `Blog.tsx`.
3. Optionally add a corresponding graphic component in `BlogGraphics.tsx`.

### Adding a new project

1. Add project data to the `projects` array in `src/components/Projects.tsx`.
2. Optionally add a graphic component in `ProjectGraphics.tsx`.

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
- Images are not optimized (profile.jpg is 1.47 MB).
- The ESLint config targets `.js/.jsx` file globs but the project uses `.ts/.tsx` — TypeScript strict mode provides the type checking safety net.
