// Compiles resume/resume.tex into public/Dean_Wu_Resume.pdf and renders
// page 1 to public/resume-preview.webp (the image shown in the site's preview).
//
// Usage: npm run resume
// Requires a LaTeX install with pdflatex (MiKTeX on Windows).

import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas } from '@napi-rs/canvas';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const texDir = join(root, 'resume');
const publicDir = join(root, 'public');
const jobName = 'Dean_Wu_Resume';
const pdfPath = join(publicDir, `${jobName}.pdf`);
const previewPath = join(publicDir, 'resume-preview.webp');
const PREVIEW_DPI = 192; // letter page -> 1632x2112, matching the <img> size in Resume.jsx

function findPdflatex() {
  const probe = spawnSync('pdflatex', ['--version'], { stdio: 'ignore' });
  if (probe.status === 0) return 'pdflatex';
  const miktex = join(process.env.LOCALAPPDATA ?? '', 'Programs/MiKTeX/miktex/bin/x64/pdflatex.exe');
  if (existsSync(miktex)) return miktex;
  console.error('pdflatex not found. Install MiKTeX (winget install MiKTeX.MiKTeX) and open a new terminal.');
  process.exit(1);
}

function compile() {
  const pdflatex = findPdflatex();
  const auxDir = mkdtempSync(join(tmpdir(), 'resume-aux-'));
  const args = [
    '-interaction=nonstopmode',
    '-halt-on-error',
    `-output-directory=${publicDir}`,
    `-aux-directory=${auxDir}`,
    `-jobname=${jobName}`,
    'resume.tex',
  ];
  try {
    // Two passes so hyperref's outline/link data settles.
    for (let pass = 1; pass <= 2; pass++) {
      const result = spawnSync(pdflatex, args, { cwd: texDir, encoding: 'utf8' });
      if (result.status !== 0) {
        const errors = (result.stdout ?? '').split('\n').filter((l) => l.startsWith('!') || l.startsWith('l.'));
        console.error(`pdflatex failed (pass ${pass}):\n${errors.join('\n') || result.stdout || result.error}`);
        process.exit(1);
      }
    }
  } finally {
    rmSync(auxDir, { recursive: true, force: true });
  }
  console.log(`✓ compiled ${pdfPath}`);
}

async function renderPreview() {
  const loadingTask = getDocument({ data: new Uint8Array(readFileSync(pdfPath)) });
  const doc = await loadingTask.promise;
  if (doc.numPages > 1) {
    console.warn(`⚠ resume is ${doc.numPages} pages; the preview only shows page 1.`);
  }
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale: PREVIEW_DPI / 72 });
  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvas, canvasContext: ctx, viewport }).promise;
  writeFileSync(previewPath, await canvas.encode('webp', 90));
  await loadingTask.destroy();
  console.log(`✓ rendered ${previewPath} (${canvas.width}x${canvas.height})`);
}

compile();
await renderPreview();
