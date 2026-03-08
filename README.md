# 3D Portfolio

Personal portfolio with 3D effects built with React 18 + Vite. Includes an interactive particle background, Three.js 3D models, animated timeline, and an EmailJS contact form.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18.2 |
| Build | Vite 4.1 |
| Styling | Tailwind CSS 3.2 |
| 3D / Canvas | Three.js, maath |
| Particles | react-tsparticles 2.11 |
| Timeline | react-vertical-timeline-component |
| Contact | @emailjs/browser |
| Hosting | Netlify (static SPA) |

---

## Local Setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
```

---

## Environment Variables

Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://www.emailjs.com) after setting up a service and email template.

---

## Deployment

Deployed on Netlify. The `netlify.toml` handles:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rule (prevents 404 on page refresh)

Push to `main` to trigger a deploy.
