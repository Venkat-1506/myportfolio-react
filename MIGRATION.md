# Migration Guide — Vanilla → React

This document explains how the original single-page vanilla portfolio
(`../index.html`, `css/`, `js/`, `projects-full.html`, `certificates-full.html`)
was migrated into this React 19 SPA and how the pieces map.

## Stack

- Vite 8 + React 19 (`react-dom/client`)
- `react-router-dom@7` for routing (`/`, `/projects`, `/certificates`, 404)
- `oxlint` for linting (scaffold default), no test framework added
- No UI/state libraries — everything is hand-rolled hooks and CSS, matching the
  original look and feel 1:1

## Folder structure

```
src/
├── main.jsx                 # style import order + StrictMode + BrowserRouter
├── App.jsx                  # composition root (bg canvas, loader, nav, routes, footer)
├── data/portfolioData.js    # single source of truth (projects, certs, skills, social…)
├── hooks/                   # all behavior moved out of inline <script>s
│   ├── useMode.js           # engineering/curious mode toggle + localStorage
│   ├── useTypewriter.js     # hero role typewriter
│   ├── useReveal.js         # IntersectionObserver reveal animations
│   ├── useCursor.js         # dual dot + ring custom cursor
│   ├── useHero3D.js         # hero canvas (stars + particles + connections)
│   ├── useBackgroundCanvas.js  # #bgCanvas (was js/bgCanvas.js)
│   └── useSectionNav.js     # scroll on home / navigate to /#id elsewhere
├── utils/                   # scrollToSection/scrollToTop/hash handling, social links
├── components/              # loader, nav, cursor, modals, footer, icons, sprite…
├── sections/                # Home sections (Hero, About, Projects, Skills, …)
├── pages/                   # HomePage, ProjectsPage, CertificatesPage, NotFoundPage
└── styles/                  # variables, style, mode, responsive = verbatim copies
                            # pages.css (full-page views + 404), global.css (SPA glue)
```

## What was ported where

| Vanilla | React |
| --- | --- |
| `index.html` inline scripts | `src/hooks/useHero3D.js`, `useTypewriter.js`, `useCursor.js`, `LoadingScreen.jsx` |
| `js/background.js` (bgCanvas) | `src/hooks/useBackgroundCanvas.js` |
| `js/loader.js` | `src/components/LoadingScreen.jsx` (all generator functions kept 1:1) |
| `js/nav.js`, `js/mode.js` | `src/hooks/useMode.js`, `src/components/Navbar.jsx`, `src/hooks/useSectionNav.js` |
| `js/stats.js`, `js/projects.js`, `js/certificates.js` | `src/components/Stats.jsx`, `src/sections/Projects.jsx`, `src/components/ProjectModal.jsx`, `src/sections/Certificates.jsx`, `src/components/CertModal.jsx` |
| `projects-full.html` | `src/pages/ProjectsPage.jsx` |
| `certificates-full.html` | `src/pages/CertificatesPage.jsx` |
| `404.html` | `src/pages/NotFoundPage.jsx` |
| `js/reveal.js` | `src/hooks/useReveal.js` |
| inline SVG icons | `src/components/icons.jsx` (DRY) + `src/components/SvgSprite.jsx` for sprite-referenced icons |
| `css/*` | `src/styles/*` verbatim (with page/global additions) |

## SPA improvements over the vanilla version

- Real client-side routing (`/projects`, `/certificates`) instead of separate HTML files.
- Section links work from anywhere: on the homepage they smooth-scroll; from a
  subpage they navigate to `/#section` and scroll (see `ScrollManager.jsx`).
- `useReveal` observes DOM mutations so reveal animations apply to content added
  by React after mount (no manual re-init needed).
- Loading screen only plays on first visit per session (`sessionStorage`), not on
  every reload.
- A single `portfolioData.js` drives projects, certs, skills, and social links.
- Canvas/loader listeners are cleaned up on unmount; React StrictMode-safe.

## Known notes / decisions

- `npm audit` reports 2 high advisories in `react-router-dom`; both are
  SSR/RSC-only, irrelevant for this SPA. Accepted.
- Devicon mappings kept from the original (SQL → `mysql`), with initials fallback.
- Google Fonts and meta/OG tags preserved from the original `index.html`.
- Original portfolio files were not modified; the migration lives in this folder.

## Manual verification checklist

1. `npm run dev` → homepage loads, loading screen plays (first visit), fades out.
2. Mode toggle switches engineering ⇄ curious; `localStorage.mode` persisted and
   reapplied before paint (no flash).
3. Nav / footer / mobile bottom nav links scroll on home and route to `/#…` from
   subpages; back/forward restores scroll position.
4. `View Projects` → `/projects`; `Certificates` → `/certificates`; unknown URL → 404 terminal.
5. Stats count up when scrolled into view; project carousel auto-advances and
   pauses on hover; modals open with scroll lock.
6. `npm run lint` → clean; `npm run build` → clean production build.
