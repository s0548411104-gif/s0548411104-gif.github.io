import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { projects, profile, stack } from '../src/data.mjs';
import { hebrew } from '../src/he.mjs';
const html = await readFile('dist/index.html', 'utf8');
test('Hebrew page translates project content while preserving controls and links', async () => {
  const he = await readFile('dist/he.html', 'utf8');
  assert.ok(he.includes('<html lang="he" dir="rtl">'));
  assert.ok(he.includes('שולמית קצנבוגן'));
  assert.ok(he.includes('data-language="he" lang="he" dir="rtl" aria-current="true"'));
  assert.ok(html.includes('data-language="en" lang="en" dir="ltr" aria-current="true"'));
  const hrefs = page => [...page.matchAll(/href="([^"]+)"/g)].map(m=>m[1]).filter(link=>!link.startsWith(profile.site));
  assert.deepEqual(hrefs(he),hrefs(html));
  for (const project of projects) {
    for (const field of ['description','overview','problem','solution','architectureNote']) {
      assert.ok(hebrew[project[field]], `${project.id}.${field} translation`);
      assert.ok(!he.includes(project[field]), `${project.id}.${field} not left in English`);
    }
    assert.ok(he.includes(`data-project="${project.id}"`));
  }
  assert.ok(he.includes('data-filter="Automation"'));
  assert.ok(he.includes('aria-label="סגירת פרטי הפרויקט"'));
});
test('Every internal link and project control has a unique destination', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [,hash] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(hash),hash);
  for (const [,id] of html.matchAll(/data-project="([^"]+)"/g)) assert.ok(ids.includes(`dialog-${id}`),id);
  for (const category of stack) for (const [,id] of category.items) assert.ok(projects.some(p=>p.id===id));
});
test('Publication has real contact information and no invented demo destinations', () => {
  assert.ok(html.includes(`mailto:${profile.email}`));
  assert.ok(!html.includes('href="#"'));
  assert.ok(!/lorem ipsum|YOUR_USERNAME|YOUR_GITHUB_USERNAME/i.test(html));
  assert.equal((html.match(/class="project-card"/g)||[]).length,projects.length);
  for (const p of projects) {
    assert.ok(p.sources.length);
    if (p.demo) assert.equal(new URL(p.demo).protocol,'https:');
  }
  for (const [,attributes] of html.matchAll(/<a\s([^>]+)>/g)) if (attributes.includes('target="_blank"')) assert.ok(attributes.includes('rel="noopener noreferrer"'));
});
test('All local assets exist and SEO uses the user site', async () => {
  for (const [,file] of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g)) await access(`dist/${file}`);
  assert.ok(html.includes('<html lang="en">'));
  assert.ok(html.includes('property="og:title"'));
  assert.ok(html.includes(`<link rel="canonical" href="${profile.site}/">`));
  await access('dist/robots.txt'); await access('dist/sitemap.xml'); await access('dist/.nojekyll');
});
test('Accessibility supports mobile navigation, modal naming and reduced motion', async () => {
  assert.ok(html.includes('aria-controls="navigation"'));
  for (const p of projects) assert.ok(html.includes(`aria-labelledby="title-${p.id}"`));
  const css=await readFile('dist/styles.css','utf8');
  assert.ok(css.includes('prefers-reduced-motion:reduce'));
  assert.ok(css.includes('[hidden]{display:none!important}'));
  assert.ok(!css.includes('@import'));
});
