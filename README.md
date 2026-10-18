# resume

Thomas Gilbert's online resume: a single page with a lazy-loaded 3D model (a floating
Macintosh), an about section, experience, skills, education, selected side projects and
interests.

**Live:** <https://totorototo.github.io/resume/>

## Content

Everything the page says lives in [`src/assets/data.json`](src/assets/data.json): `general`
(name, role, bio, contact links), `about`, `experiences`, `skills`, `education`,
`selectedProjects`, `interests` and `socials`. Edit that file to update the resume; side project emblems
sit next to it in `src/assets/`. The page title and description are in `index.html`.

## Stack

- React 18 + Vite, state in Zustand
- Styled-components with styled-system primitives (`src/components/elements`)
- React Three Fiber + drei for the scene (`src/components/organisms/scene`), loaded with
  `React.lazy` so it doesn't hold up the first paint

## Run

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run build     # into dist/, served under /resume/ (vite.config.js `base`)
npm run preview
```

## Deploy

GitHub Pages, on every push to `main` (`.github/workflows/.gitlab-ci.yaml`, despite its
name a GitHub Actions workflow): build with Node 20, upload `dist/`, deploy.
