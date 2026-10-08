import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(projectDir, 'dist', 'index.html');
const vite = await createServer({
  configFile: path.join(projectDir, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(React.createElement(App));
  const html = await fs.readFile(outputPath, 'utf8');
  const rootMarkup = '<div id="root"></div>';

  if (!html.includes(rootMarkup)) {
    throw new Error('Could not find the application root in dist/index.html');
  }

  await fs.writeFile(outputPath, html.replace(rootMarkup, `<div id="root">${markup}</div>`));
  console.log('Pre-rendered portfolio content into dist/index.html');
} finally {
  await vite.close();
}
