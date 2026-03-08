# Portfolio Content Update — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the 3D Portfolio with accurate LinkedIn profile data — fix experiences, reduce tech stack to most significant technologies, add the Delet admin project, and fix duplicate project entries.

**Architecture:** All portfolio content lives in `src/constants/index.js` with assets imported from `src/assets/index.js`. Changes are data-driven — edit the constants file and asset barrel, no component changes needed. One new screenshot is required for the Delet admin project.

**Tech Stack:** React 18.2, Vite 4.1 (existing SPA — content-only changes)

---

## Summary of Changes

| Area | Current State | Target State |
|------|--------------|--------------|
| Experiences | 2 entries (DevLabs "Present", TSG) | 4 entries (Delet current, DevLabs past, TSG past, BA Gov past) |
| Tech Stack | 4 categories, 28 items inc. Figma/Laravel/soft-skills | 3 categories, ~15 items — only real technologies |
| Projects | 4 entries, 2 share same URL/repo | 4 entries, each distinct — replace LetMeRent duplicate with Delet Admin |
| About Me | Generic bio | Updated to reflect LinkedIn summary |

---

## Task 1: Take Screenshot of admin.delet.com

**This is a manual step — the developer must do this before proceeding.**

**Step 1: Capture screenshot**

Visit `https://admin.delet.com` in a browser, take a screenshot of the main dashboard/landing view. Save it as a `.webp` file (use any online converter if needed).

**Step 2: Save to assets**

Save the screenshot as:
```
src/assets/delet_admin.webp
```

Recommended: ~1200px wide, same aspect ratio as existing project images (`yovivo.webp` is 179KB — keep similar quality).

**Step 3: Optionally save a Delet logo**

If a Delet company logo is available (for the experience timeline), save it as:
```
src/assets/company/delet.webp
```

If no logo is available, we'll reuse the existing `devlabs.webp` as a temporary placeholder since Delet hired through DevLabs.

---

## Task 2: Register New Assets in Barrel Export

**Files:**
- Modify: `src/assets/index.js`

**Step 1: Add new imports for Delet assets**

Add these imports after the existing company imports (around line 45-46):

```javascript
import delet from "./company/delet.webp"
```

Add this import after the existing project images (around line 52):

```javascript
import delet_admin from "./delet_admin.webp"
```

**Step 2: Add to export object**

Add `delet` and `delet_admin` to the export block.

**Step 3: Remove unused imports**

Remove these imports that will no longer be referenced after Task 3:
- `figma` (line 15)
- `threejs` (line 25)
- `axios` (line 26)
- `documentation` (line 27)
- `lab` (line 29)
- `onlineplatform` (line 30)
- `onlinetutorials` (line 31)
- `pairprogramming` (line 32)
- `reactnavigation` (line 33)
- `stackoverflow` (line 34)
- `laravel` (line 35)
- `letMeRent_img` (line 48) — LetMeRent project being replaced
- `letMeRent` (line 57) — LetMeRent logo being replaced
- `carrent` (line 54) — unused legacy
- `jobit` (line 55) — unused legacy
- `meta` (line 38) — unused placeholder
- `shopify` (line 39) — unused placeholder
- `starbucks` (line 40) — unused placeholder
- `tesla` (line 41) — unused placeholder

Also remove these from the `export { ... }` block.

**Step 4: Verify no build errors**

Run: `npm run build`
Expected: Build succeeds (no broken imports)

**Step 5: Commit**

```bash
git add src/assets/index.js src/assets/delet_admin.webp src/assets/company/delet.webp
git commit -m "feat: register Delet assets, remove unused imports from barrel"
```

---

## Task 3: Update Tech Stack (services array)

**Files:**
- Modify: `src/constants/index.js` (lines 69-203)

**Step 1: Replace the entire `services` array**

Replace the current 4-category services array with this 3-category version:

```javascript
const services = [
  {
    title: "Front-end",
    icon: web,
    technologies: [
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React JS", icon: reactjs },
      { name: "Redux Toolkit", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    title: "Back-end",
    icon: backend,
    technologies: [
      { name: "Node JS", icon: nodejs },
      { name: "NestJS", icon: nestjs },
      { name: "MongoDB", icon: mongodb },
      { name: "Git", icon: git },
      { name: "Docker", icon: docker },
    ],
  },
  {
    title: "Mobile",
    icon: mobile,
    technologies: [
      { name: "React Native", icon: reactjs },
      { name: "Expo", icon: expo },
    ],
  },
];
```

**What changed:**
- **Front-end**: Removed Three JS, Figma
- **Back-end**: Removed Laravel, capitalized "Git"
- **Mobile** (renamed from "React Native"): Removed React Navigation, Axios, Redux (duplicated in front-end)
- **Tools**: Entire category removed (Stack Overflow, Online documentation, Online coding platforms, Online tutorials, Pair programming, Personal projects are not technologies)

**Step 2: Update the imports at the top of the file**

Remove these from the import block (lines 1-44):

```javascript
// Remove these imports:
figma,
threejs,
axios,
laravel,
documentation,
lab,
onlineplatform,
onlinetutorials,
pairprogramming,
reactnavigation,
stackoverflow,
letMeRent_img,
letMeRent,
carrent,
jobit,
```

Add these new imports:

```javascript
delet,
delet_admin,
```

**Step 3: Update the `data.services` array (lines 354-371)**

Replace the 4-service cards with 3 (matching the new categories):

```javascript
services: [
  { title: "Front-end Developer", icon: web },
  { title: "Back-end Developer", icon: backend },
  { title: "Mobile Developer", icon: mobile },
],
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 5: Commit**

```bash
git add src/constants/index.js
git commit -m "feat: reduce tech stack to significant technologies, remove Tools category"
```

---

## Task 4: Update Experiences from LinkedIn

**Files:**
- Modify: `src/constants/index.js` (lines 206-233)

**Step 1: Replace the `experiences` array**

Replace with 4 entries matching the LinkedIn profile, in reverse chronological order:

```javascript
const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "Delet",
    icon: delet,
    link: "https://www.linkedin.com/company/delet/",
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "Built and maintained enterprise web applications using React and Express.js, managing AWS infrastructure including Cognito authentication, S3 storage, and EC2 deployments.",
      "Integrated multiple third-party services including August, Textgrid, and Zillow APIs to expand application functionality.",
      "Designed and implemented normalized database structures to optimize data management and application performance.",
      "Set up CI/CD pipelines through Bitbucket and handled project tracking with Jira to deliver projects efficiently.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "DevLabs",
    icon: devlabs,
    link: "https://www.linkedin.com/company/devlabshq/",
    iconBg: "#E6DEDD",
    date: "February 2022 - February 2023",
    points: [
      "Built interactive and well-documented web applications using modern JavaScript frameworks such as Next.js with TypeScript.",
      "Developed scalable backend services using Express.js and Node.js, contributing to robust and reliable web application functionality.",
      "Participated in Agile Scrum ceremonies, aiding in sprint planning, daily stand-ups, sprint reviews, and retrospectives.",
    ],
  },
  {
    title: "Full-stack Junior Developer",
    company_name: "TSG Proadvisor",
    icon: tsg,
    link: "https://tsgproadvisorlatino.talentlms.com/",
    iconBg: "#E6DEDD",
    date: "January 2021 - February 2022",
    points: [
      "Harnessed React and Next.js frameworks to build dynamic and responsive applications tailored to client specifications.",
      "Pioneered the integration of back-end and front-end components, leading to a 30% improvement in site performance and load times.",
    ],
  },
  {
    title: "Functional Analyst",
    company_name: "Buenos Aires City Government",
    icon: ba,
    link: "https://www.linkedin.com/company/aborea/",
    iconBg: "#E6DEDD",
    date: "January 2020 - December 2020",
    points: [
      "Conducted comprehensive analysis of business processes to identify opportunities for improvement, leveraging IT solutions to optimize and streamline those processes.",
    ],
  },
];
```

**What changed:**
- Added Delet as current job (March 2024 - Present) with detailed LinkedIn bullet points
- Fixed DevLabs dates to Feb 2022 - Feb 2023 (was incorrectly "May 2022 - Present")
- Fixed TSG dates to Jan 2021 - Feb 2022 (was "May 2021 - May 2022")
- Added Buenos Aires City Government (Jan 2020 - Dec 2020) — logo `ba` already exists as `baciudad.webp`

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/constants/index.js
git commit -m "feat: update experiences from LinkedIn — add Delet, fix dates, add BA Gov"
```

---

## Task 5: Fix Projects — Replace Duplicate, Add Delet Admin

**Files:**
- Modify: `src/constants/index.js` (lines 235-344)

**Context on the duplication problem:**
- "Yovivo" and "LetMeRent" both link to the **exact same** GitHub repo (`Property-rent-management/tree/main/client`) and the **exact same** live URL (`rent-dashboard.netlify.app`). The LetMeRent screenshot actually shows "Yariga" branding, not "LetMeRent".
- The fix: Replace the duplicate LetMeRent entry with the new Delet Admin project.

**Step 1: Replace the `projects` array**

```javascript
const projects = [
  {
    name: "Delet Admin",
    description:
      "Enterprise admin dashboard for property management with AWS-backed authentication, third-party API integrations, and real-time data management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: delet_admin,
    source_code_link: "",
    website_link: "https://admin.delet.com",
    logo: delet,
  },
  {
    name: "Yovivo",
    description:
      "Property rent web application focused on general rent and extended stays for digital nomads.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Laravel", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
    ],
    image: yovivo,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/client",
    website_link: "https://rent-dashboard.netlify.app/",
    logo: yovivoLogo,
  },
  {
    name: "Arturo MichAIlena",
    description:
      "AI image generation app powered by OpenAI's DALL-E API with community showcase.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "OpenAI API", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: arturo_img,
    source_code_link: "https://github.com/Oscar-Espinoza/AI-Image-Generation-App",
    website_link: "https://arturo-michailena.netlify.app/",
    logo: arturo,
  },
  {
    name: "Yariga REST API Docs",
    description:
      "Visual API documentation for the Yariga property platform built with Swagger.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Swagger", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
    ],
    image: ApiDoc,
    source_code_link: "https://github.com/Oscar-Espinoza/Property-rent-management/tree/main/server",
    website_link: "https://nice-gold-ant-gear.cyclic.app/docs/",
    logo: swagger_img,
  },
];
```

**What changed:**
- **Replaced** LetMeRent (duplicate of Yovivo) with **Delet Admin** as first project (most prominent position)
- Delet Admin has `source_code_link: ""` since it's a private enterprise app — the ProjectCard component should handle empty string gracefully (hide the GitHub button)
- Kept Yovivo, Arturo, and Yariga API docs
- Minor description polish on existing projects

**Step 2: Check if ProjectCard handles empty `source_code_link`**

Read: `src/components/Projects/index.jsx`

Look for the GitHub link rendering. If it renders unconditionally, wrap it in a conditional:

```jsx
{source_code_link && (
  // GitHub link button
)}
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/constants/index.js src/components/Projects/index.jsx
git commit -m "feat: replace duplicate LetMeRent with Delet Admin, fix project list"
```

---

## Task 6: Update About Me Section

**Files:**
- Modify: `src/constants/index.js` (lines 346-372)

**Step 1: Update the `data.aboutMe` object**

```javascript
aboutMe: {
  title: "Hi, I'm Oscar",
  subtitle: "Full-stack web and mobile software developer",
  aboutMe: "Full Stack Developer at Delet with 4+ years of experience building enterprise web applications. I work across the stack with React, Next.js, Node.js, and AWS, and have delivered projects for clients including TSG Proadvisor and Buenos Aires City Government. I combine technical proficiency with solid problem-solving skills to tackle complex projects efficiently.",
},
```

**What changed:**
- Updated to mention Delet as current company
- Reflects 4+ years of experience (2021-2026)
- References actual clients from LinkedIn
- More concrete and specific than the previous generic bio

**Step 2: Commit**

```bash
git add src/constants/index.js
git commit -m "feat: update about-me bio to reflect current role at Delet"
```

---

## Task 7: Clean Up Unused Asset Files (Optional)

**Files:**
- Delete unused files from `src/assets/`

These asset files are no longer imported anywhere after the changes above:

```
src/assets/tech/figma.webp
src/assets/tech/threejs.svg
src/assets/tech/axios.svg
src/assets/tech/documentation.svg
src/assets/tech/lab.svg
src/assets/tech/onlineplatform.svg
src/assets/tech/onlinetutorials.svg
src/assets/tech/pairprogramming.svg
src/assets/tech/reactnavigation.webp
src/assets/tech/stackoverflow.svg
src/assets/tech/laravel_logo.png
src/assets/carrent.webp
src/assets/jobit.webp
src/assets/letMeRent.webp
src/assets/websites/letMeRent.svg
src/assets/company/meta.webp
src/assets/company/shopify.webp
src/assets/company/starbucks.webp
src/assets/company/tesla.webp
```

**Step 1: Delete files**

```bash
rm src/assets/tech/figma.webp \
   src/assets/tech/threejs.svg \
   src/assets/tech/axios.svg \
   src/assets/tech/documentation.svg \
   src/assets/tech/lab.svg \
   src/assets/tech/onlineplatform.svg \
   src/assets/tech/onlinetutorials.svg \
   src/assets/tech/pairprogramming.svg \
   src/assets/tech/reactnavigation.webp \
   src/assets/tech/stackoverflow.svg \
   src/assets/tech/laravel_logo.png \
   src/assets/carrent.webp \
   src/assets/jobit.webp \
   src/assets/letMeRent.webp \
   src/assets/websites/letMeRent.svg \
   src/assets/company/meta.webp \
   src/assets/company/shopify.webp \
   src/assets/company/starbucks.webp \
   src/assets/company/tesla.webp
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds (no broken imports — we already removed all references)

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused asset files (old tech icons, placeholder logos)"
```

---

## Task 8: Final Verification

**Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, no warnings about missing assets

**Step 2: Dev server visual check**

Run: `npm run dev`

Verify in browser:
- [ ] Hero section shows correct name and title
- [ ] Experience timeline shows 4 entries in correct order (Delet → DevLabs → TSG → BA Gov)
- [ ] Tech stack shows 3 categories (Front-end, Back-end, Mobile) with no removed items
- [ ] Projects show 4 distinct cards (Delet Admin, Yovivo, Arturo, Yariga Docs) — no repeated images
- [ ] Delet Admin card links to admin.delet.com
- [ ] GitHub button hidden for Delet Admin (private repo)
- [ ] About section shows updated bio mentioning Delet

**Step 3: Final commit (if any fixups needed)**

```bash
git add -A
git commit -m "fix: final adjustments from visual verification"
```

---

## Pre-Requisites Checklist

Before starting Task 2, the developer MUST complete Task 1:

- [ ] Screenshot of admin.delet.com saved as `src/assets/delet_admin.webp`
- [ ] Delet company logo saved as `src/assets/company/delet.webp` (or decide to reuse devlabs logo)

## Notes

- **No component changes needed** except a possible conditional in `ProjectCard` for empty `source_code_link` (Task 5, Step 2)
- All content is driven by `src/constants/index.js` — the components read from it
- The `ba` (Buenos Aires) company logo already exists as `src/assets/company/baciudad.webp`
- The Delet Admin project has no public GitHub repo — `source_code_link` is empty string
