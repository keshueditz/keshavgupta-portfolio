# Keshav Murari Gupta — Portfolio Website

A production-ready portfolio built with React, Vite, Tailwind CSS and Framer Motion — showcasing video editing,
graphic design, and motion graphics/animation work.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site into the `dist/` folder.

## Deploy to Netlify

**Option A — drag and drop**
1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist` folder in.

**Option B — Git-based deploy**
1. Push this project to a GitHub/GitLab repo.
2. In Netlify: "Add new site" → "Import an existing project" → connect the repo.
3. Build command: `npm run build`, Publish directory: `dist` (already set in `netlify.toml`).

## Project structure

```
src/
  components/     All page sections (Hero, About, Services, VideoEditing, etc.)
  data/portfolio.js   All real content — edit this file to update text, links, or project info
public/assets/
  videos/         Compressed video files used across Video Editing & Motion Graphics
  posters/        Poster/thumbnail images for each video
  images/         Graphic design gallery images
  profile/        Profile photo
```

## Updating content

All text content (bio, services, skills, education, project titles/descriptions) lives in
`src/data/portfolio.js`. Update it there — no need to touch component files for text changes.

To add or replace a video/image, drop the file into the matching `public/assets/...` folder and
update the corresponding path in `src/data/portfolio.js`.

## Notes

- Two pieces are labeled as **concept/practice work** in the data file (`isConcept: true`) because they
  use AI-generated visuals or third-party brand assets rather than original client work. Keep those
  labels if you keep the pieces public.
- A re-edit of existing film footage was intentionally left out of this build per your instructions.
  It's not referenced anywhere in the code.
