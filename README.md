# Venkatasaarathy R — Portfolio

A modern, responsive personal portfolio built with **React 19**, **Vite**, and **React Router**. It showcases my projects, certificates, skills, resume, and contact info — with a dual-mode UI (`engineering` / `creative`), animated background canvas, custom cursor, reveal-on-scroll animations, and a loading screen.

**Live site:** [myportfolio-react.netlify.app](https://myportfolio-react.netlify.app)

## Features

- **Dual-mode theming** — toggle between `engineering` and `creative` modes; preference persists in `localStorage`
- **Client-side routing** — `/`, `/projects`, `/certificates`, plus a custom 404 page (React Router v7)
- **Animated background canvas** and custom cursor effects
- **Loading screen**, scroll reveal animations, and back-to-top button
- **Responsive** — mobile bottom navigation, social strip, and adaptive layouts for all screen sizes
- **Modals** for project details, certificates, and resume preview (with direct PDF download)
- **Content-driven** — all projects, certificates, skills, and social links live in a single data file

## Tech Stack

| Layer | Tools |
| --- | --- |
| UI | React 19, React Router 7 |
| Build | Vite 8 |
| Styling | Plain CSS (custom properties, mode-based themes) |
| Linting | oxlint |

## Project Structure

```
├── public/
│   ├── assets/          # images, certificates, resume PDF, icons
│   ├── _redirects       # Netlify SPA fallback
│   └── icons.svg
├── src/
│   ├── components/      # Navbar, modals, footer, nav, stats, etc.
│   ├── data/
│   │   └── portfolioData.js   # ← edit this to update site content
│   ├── hooks/           # useMode, useCursor, useReveal, useTypewriter...
│   ├── pages/           # HomePage, ProjectsPage, CertificatesPage, NotFoundPage
│   ├── sections/        # Hero, About, Skills, Projects, Certificates...
│   ├── styles/          # CSS (variables, modes, responsive, pages)
│   └── utils/
├── index.html
├── netlify.toml         # Netlify build + SPA redirect config
└── vite.config.js
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/Venkat-1506/myportfolio-react.git
cd myportfolio-react

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Editing Content

All site content is centralized in [`src/data/portfolioData.js`](src/data/portfolioData.js):

- **Projects** — title, problem/challenge/solution, features, tech stack, GitHub/live URLs, preview image
- **Certificates** — title, issuer, category, image, description
- **Skills** — grouped by category (languages, frontend, tools, data, currently learning)
- **Social links** — GitHub, LinkedIn, Instagram, LeetCode, email
- **Beyond coding** — hobbies and interests

Resume PDF: `public/assets/resume/Venkatasaarathy_R_Resume.pdf`

## Deployment (Netlify)

The repo ships with a [`netlify.toml`](netlify.toml), so Netlify auto-configures everything:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Steps:**

1. Push the repo to GitHub
2. In Netlify: **Add new site → Import an existing project** → pick the repo
3. Netlify picks up `netlify.toml` automatically — keep the default build settings
4. Deploy

> **Note:** The `/* → /index.html` redirect is required so deep links like `/projects`
> work on refresh (client-side routing). The publish directory must be `dist`,
> not the repo root — publishing the root results in a blank page.

### Fixing a Blank Page on an Existing Netlify Site

If your site loads blank, the publish directory is wrong or the build never ran:

1. **Site configuration → Build & deploy → Environment** — verify:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. Or simply trigger a **new deploy** — `netlify.toml` overrides the old settings on the next build
3. Check the deploy log: it should show `vite build` output and publish `dist/`

## Project Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, about, skills, projects, certificates, contact |
| `/projects` | Full projects listing |
| `/certificates` | Certificate gallery |
| `*` | 404 — Not found |

## License

MIT — feel free to use this as a template for your own portfolio.
