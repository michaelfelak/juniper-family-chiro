// GitHub Pages answers `/welcome` with a 301 redirect to `/welcome/` when only
// `welcome/index.html` exists. A sibling `welcome.html` is served directly at
// `/welcome` with HTTP 200, so emit one for every prerendered route.
import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'docs';
const manifest = JSON.parse(readFileSync(join(outDir, 'prerendered-routes.json'), 'utf8'));

let count = 0;
for (const route of Object.keys(manifest.routes)) {
  const name = route.replace(/^\/+|\/+$/g, '');
  if (!name) continue;
  const source = join(outDir, name, 'index.html');
  if (!existsSync(source)) {
    throw new Error(`Missing prerendered page for route ${route}: ${source}`);
  }
  copyFileSync(source, join(outDir, `${name}.html`));
  count++;
}

for (const required of ['index.html', 'welcome.html', 'welcome/index.html', 'CNAME', '404.html']) {
  if (!existsSync(join(outDir, required))) {
    throw new Error(`Deployment output is missing ${required}`);
  }
}

console.log(`Generated ${count} route entry pages (<route>.html) in ${outDir}/`);
