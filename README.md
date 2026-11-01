# deanwu.me

My personal portfolio website, built with [React](https://react.dev/), [React Router](https://reactrouter.com/), and [Vite](https://vite.dev/), styled with plain CSS (no UI framework).

The source for this website is made with the intentions of personal use and not be a template or theme. Feel free to take any inspirations from this website but it was made without considering being cloned or deployed.

## Running locally

Requires Node.js.

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build into build/
npm run preview  # serve the production build
```

## Resume

The resume is written in LaTeX at `resume/resume.tex`. The site serves a compiled copy, so after editing it run:

```bash
npm run resume
```

This compiles `public/Dean_Wu_Resume.pdf` and renders `public/resume-preview.webp`, the image shown in the site's resume preview. It needs `pdflatex` from a LaTeX distribution such as [MiKTeX](https://miktex.org/) (`winget install MiKTeX.MiKTeX` on Windows).

The resume page itself (`src/pages/Resume.jsx`) is a longer, more detailed version and is edited by hand.

## Project structure

```
src/
  pages/       one component per route (Home, About, Projects, Resume, ...)
  components/  shared layout pieces (Navbar, Footer, Page, ...)
  data/        project, experience and award listings
  images/      images bundled by Vite
  index.css    all site styles
public/        files served as-is (resume PDF, favicons, .htaccess)
resume/        LaTeX source of the resume
scripts/       build-resume.mjs, used by `npm run resume`
```
