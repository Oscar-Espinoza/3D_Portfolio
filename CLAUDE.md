# CLAUDE.md — 3D Portfolio

AI-assisted development context for this project.

---

## Stack

| Layer | Library | Version |
|---|---|---|
| UI framework | React | 18.2 |
| Build tool | Vite | 4.1 |
| Styling | Tailwind CSS | 3.2 |
| 3D / Canvas | Three.js (via @react-three/fiber, maath) | — |
| Particles | react-tsparticles + tsparticles | 2.11 |
| Timeline | react-vertical-timeline-component | 3.6 |
| Drag gesture | react-use-gesture | 9.1 |
| Device detection | react-device-detect | 2.2 |
| 3D math utils | maath | 0.5 |
| Icons | react-icons | 4.10 |
| Contact form | @emailjs/browser | 3.10 |
| PostCSS | postcss + autoprefixer | — |
| Types | TypeScript type defs only (no .ts source files) |
| Hosting | Netlify (static SPA) | — |

No SSR, no server functions. Pure static SPA.

---

## Project Structure

```
src/
  App.jsx               # Root: all sections composed here
  main.jsx              # React 18 createRoot entry
  index.css             # Global styles + Tailwind directives
  styles.js             # Shared Tailwind class strings (design tokens)
  components/
    Navbar/
    Hero/               # Animated hero with drag gesture + particles
    About/              # Skills cards
    Experience/         # Vertical timeline
    Tech/               # 3D tech icons (Three.js canvas)
    Projects/           # Project cards with tilt effect
    Contact/            # EmailJS contact form with 3D Earth model
    Loader/             # Canvas loading spinner
    Particles/          # tsparticles background
    ScrollBar/          # Custom scrollbar
    Socials/            # Social link icons
    index.js            # Barrel export for all components
  hoc/
    SectionWrapper.jsx  # HOC: wraps sections with scroll motion + ID anchor
    index.js
  constants/            # All static data (experiences, projects, skills, etc.)
  assets/               # Images, 3D models, icons
  utils/                # Shared helpers
```

---

## Key Patterns

### SectionWrapper HOC
Every main section (About, Experience, Tech, Projects, Contact) is wrapped with `SectionWrapper`. It:
- Adds Framer Motion scroll-triggered fade-in
- Injects a named anchor (`id`) for navbar links
- Applies consistent section padding

When adding a new section, wrap it: `export default SectionWrapper(MySection, "my-section")`.

### Lazy Loading
Components with heavy 3D/canvas content are lazy-loaded in `App.jsx` using `React.lazy` + `Suspense` with the `Loader` component as fallback.

### Shared Style Tokens
`src/styles.js` exports Tailwind class strings used across components. Prefer editing there over one-off inline classes when adding padding, headings, or layout patterns.

### Constants / Data
All portfolio content (work experiences, projects, tech icons, nav links) lives in `src/constants/`. Edit there to update portfolio content — no component changes needed.

### Device Detection
`react-device-detect` is used in `Hero` to conditionally disable some animations on mobile.

---

## Environment Variables

Create a `.env` file in the project root (never commit it):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

All Vite env vars must be prefixed with `VITE_` to be exposed to the browser.

---

## Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview dist/ locally
```

---

## Deployment (Netlify)

- Build config is in `netlify.toml` (publish dir: `dist`, command: `npm run build`)
- The `[[redirects]]` rule in `netlify.toml` handles SPA routing (prevents 404 on direct URL / refresh)
- **Prerendering**: must be disabled manually in the Netlify dashboard:
  Site configuration → Build & deploy → Post processing → Prerendering → **Disable**
  (There is no `netlify.toml` option for this — it's UI-only)

---

## Things to Watch Out For

- **No TypeScript source** — `.jsx` only. Type defs from `@types/react` are installed but there are no `.ts`/`.tsx` files. Don't convert unless explicitly asked.
- **Vite 4 (not 5+)** — some newer Vite plugin APIs may differ. Check changelog before upgrading.
- **tsparticles 2.x API** — v2 and v3 have breaking API differences. The project uses v2; don't upgrade without verifying component compatibility.
- **maath** — small 3D math utility used for Three.js animations. If it throws during build, check peer deps against the Three.js version in use.
- **react-use-gesture 9.x** — older API; `@use-gesture/react` is the current package name. Don't rename imports without migrating.
- **Canvas performance on mobile** — 3D sections (Tech, Contact Earth) are resource-heavy. The project uses device detection to reduce load on mobile; preserve that logic when editing those components.
