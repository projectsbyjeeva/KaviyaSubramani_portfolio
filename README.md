# Kaviya Subramani — React portfolio

A responsive single-page portfolio built with React and Vite. Includes work experience, technical skills, project screenshot galleries, education, contact links, and a downloadable résumé.

## Run locally

Use Node.js 22.12+ (Node 24 recommended).

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173). Use the Vite server instead of Live Server or opening `index.html` directly.

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. Assets use a relative base so the build can also be hosted under a subdirectory.

## Editing

- `src/components/`: portfolio sections, navigation, and reusable gallery component.
- `src/data/galleries.js`: screenshot paths, captions, and dimensions.
- `src/styles/portfolio.css`: responsive styles.
- `public/images/`: screenshots and `Kaviya_Subramani.pdf`. Vite serves these at `images/` and copies them into the build.

The mobile menu and screenshot selection use React state. No backend is required.

## Browser checks

```sh
npx playwright install chromium
npm test
```

Alternatively, use an installed Chrome browser:

```sh
CHROME_PATH=/usr/bin/google-chrome npm test
```

Checks cover section rendering, local image assets, résumé download, independent galleries, and mobile navigation.
