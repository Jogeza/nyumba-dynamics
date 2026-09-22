import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://www.nyumbadynamics.com';
const LAST_MODIFIED = process.env.SITEMAP_LASTMOD || new Date().toISOString().slice(0, 10);

const readJson = (relativePath) =>
  JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));

const services = readJson('src/data/servicesData.json');
const projects = readJson('src/data/projectData.json');
const posts = readJson('src/data/blogData.json');

const staticPaths = [
  '/',
  '/about',
  '/services',
  '/smart-home',
  '/properties',
  '/blog',
  '/contact',
  '/consultation',
  '/privacy',
  '/terms',
];

const paths = [
  ...staticPaths,
  ...services.map(({ slug }) => `/services/${slug}`),
  ...projects.map(({ id }) => `/property/${id}`),
  ...posts.map(({ link }) => link),
];

if (paths.some((route) => typeof route !== 'string' || !route.startsWith('/'))) {
  throw new Error('Every sitemap route must be a root-relative path');
}

const uniquePaths = [...new Set(paths)];
if (uniquePaths.length !== paths.length) {
  throw new Error('Duplicate URLs found while generating sitemap.xml');
}

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const entries = uniquePaths
  .map((route) => {
    const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
    return [
      '  <url>',
      `    <loc>${escapeXml(url)}</loc>`,
      `    <lastmod>${LAST_MODIFIED}</lastmod>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  entries,
  '</urlset>',
  '',
].join('\n');

const output = path.join(ROOT, 'public', 'sitemap.xml');
fs.writeFileSync(output, xml, 'utf8');
console.log(`Generated ${uniquePaths.length} sitemap URLs at ${output}`);
