import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectDir = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(projectDir, 'index.html');
const builtHtmlPath = path.join(projectDir, 'dist', 'index.html');
const robotsPath = path.join(projectDir, 'public', 'robots.txt');
const sitemapPath = path.join(projectDir, 'public', 'sitemap.xml');
const manifestPath = path.join(projectDir, 'public', 'site.webmanifest');
const ogImagePath = path.join(projectDir, 'public', 'og-image.svg');

const tests = [];
function record(category, testName, passed, details = '') {
  tests.push({ category, testName, passed, details });
  console.log(`[${passed ? 'PASS' : 'FAIL'}] [${category}] ${testName}${details ? ` -> ${details}` : ''}`);
}

console.log('\n========================================');
console.log('   SEO AUDIT & META VERIFICATION');
console.log('========================================\n');

// 1. Check index.html
if (!fs.existsSync(htmlPath)) {
  record('HTML', 'index.html existence', false, 'Missing index.html');
} else {
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  if (titleMatch) {
    const title = titleMatch[1];
    const len = title.length;
    record('Metadata', 'Title Tag Presence', true, `"${title}" (${len} chars)`);
    record('Metadata', 'Title Length Check', len >= 30 && len <= 80, `Length: ${len} (Optimal: 30-70 chars)`);
  } else {
    record('Metadata', 'Title Tag Presence', false);
  }

  // Description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (descMatch) {
    const desc = descMatch[1];
    const len = desc.length;
    record('Metadata', 'Description Meta Tag', true, `"${desc}" (${len} chars)`);
    record('Metadata', 'Description Length Check', len >= 100 && len <= 200, `Length: ${len} (Optimal: 120-160 chars)`);
  } else {
    record('Metadata', 'Description Meta Tag', false);
  }

  // Keywords
  const kwMatch = html.match(/<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/i);
  record('Metadata', 'Keywords Meta Tag', !!kwMatch, kwMatch ? `${kwMatch[1].split(',').length} keywords detected` : '');

  // Canonical
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  record('Metadata', 'Canonical URL Tag', !!canonMatch && canonMatch[1] === 'https://harigokulprasad.dev/', canonMatch ? canonMatch[1] : 'Missing');

  // Robots & Crawlers
  const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  record('Crawling', 'Robots Tag (index, follow)', !!robotsMatch && robotsMatch[1].includes('index') && robotsMatch[1].includes('follow'), robotsMatch ? robotsMatch[1] : '');

  const googlebotMatch = html.match(/<meta\s+name=["']googlebot["']\s+content=["']([^"']+)["']/i);
  record('Crawling', 'Googlebot Specific Directives', !!googlebotMatch, googlebotMatch ? googlebotMatch[1] : '');

  // Geo Tags
  const geoRegion = html.match(/<meta\s+name=["']geo\.region["']\s+content=["']([^"']+)["']/i);
  const geoPlace = html.match(/<meta\s+name=["']geo\.placename["']\s+content=["']([^"']+)["']/i);
  const geoPos = html.match(/<meta\s+name=["']geo\.position["']\s+content=["']([^"']+)["']/i);
  record('Geo SEO', 'Geographic Localization Tags', !!(geoRegion && geoPlace && geoPos), `Region: ${geoRegion?.[1]}, Place: ${geoPlace?.[1]}`);

  // OpenGraph Tags
  const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i);
  const ogDesc = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
  const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  const ogUrl = html.match(/<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i);
  record('OpenGraph', 'og:title, og:description, og:url, og:image', !!(ogTitle && ogDesc && ogImage && ogUrl), `Image: ${ogImage?.[1]}`);

  // Twitter Tags
  const twCard = html.match(/<meta\s+name=["']twitter:card["']\s+content=["']([^"']+)["']/i);
  const twImg = html.match(/<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i);
  record('Twitter Card', 'twitter:card summary_large_image & image', !!(twCard && twImg && twCard[1] === 'summary_large_image'), `Card: ${twCard?.[1]}`);

  // Schema.org JSON-LD
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      const graph = parsed['@graph'] || [parsed];
      const types = graph.map(g => g['@type']);
      record('Structured Data', 'JSON-LD Schema.org Validity', true, `Entities: ${types.join(', ')}`);
      
      const personEntity = graph.find(g => g['@type'] === 'Person');
      if (personEntity) {
        record('Structured Data', 'Person Entity Verification', true, `Name: ${personEntity.name}, Job: ${personEntity.jobTitle}, Skills: ${personEntity.knowsAbout?.length} skills listed`);
      } else {
        record('Structured Data', 'Person Entity Verification', false, 'Missing Person entity');
      }

      const websiteEntity = graph.find(g => g['@type'] === 'WebSite');
      record('Structured Data', 'WebSite Entity Verification', !!websiteEntity, websiteEntity ? websiteEntity.name : 'Missing');

      const breadcrumbEntity = graph.find(g => g['@type'] === 'BreadcrumbList');
      record('Structured Data', 'BreadcrumbList Entity Verification', !!breadcrumbEntity, breadcrumbEntity ? `${breadcrumbEntity.itemListElement?.length} items` : 'Missing');
    } catch (err) {
      record('Structured Data', 'JSON-LD Schema.org Validity', false, err.message);
    }
  } else {
    record('Structured Data', 'JSON-LD Schema.org Presence', false, 'Missing JSON-LD block');
  }
}

// Verify the production build includes server-rendered portfolio content.
if (fs.existsSync(builtHtmlPath)) {
  const builtHtml = fs.readFileSync(builtHtmlPath, 'utf8');
  const hasRenderedContent = builtHtml.includes('<div id="root">') && builtHtml.includes('Hey, I') && builtHtml.includes('id="about"') && builtHtml.includes('id="contact"');
  record('Rendering', 'Production HTML contains portfolio content', hasRenderedContent, hasRenderedContent ? 'Hero and page sections are present before JavaScript runs' : 'Build output is missing pre-rendered page content');
} else {
  record('Rendering', 'Production HTML contains portfolio content', false, 'Run npm run build first');
}

// 2. Robots.txt
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const hasAgent = robots.includes('User-agent: *');
  const hasAllow = robots.includes('Allow: /');
  const hasSitemap = robots.includes('Sitemap: https://harigokulprasad.dev/sitemap.xml');
  record('Crawling', 'robots.txt Configuration', hasAgent && hasAllow && hasSitemap, 'Proper Allow rule and Sitemap link');
} else {
  record('Crawling', 'robots.txt Presence', false, 'Missing robots.txt');
}

// 3. Sitemap.xml
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const hasRoot = sitemap.includes('<loc>https://harigokulprasad.dev/</loc>');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const hasOnlyPageUrls = urls.every((url) => !url.includes('#'));
  record('Sitemap', 'sitemap.xml Configuration', hasRoot && hasOnlyPageUrls && urls.length === 1, `${urls.length} page URL(s); fragments excluded`);
} else {
  record('Sitemap', 'sitemap.xml Presence', false, 'Missing sitemap.xml');
}

// 4. Web Manifest
if (fs.existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    record('PWA', 'site.webmanifest Validation', !!manifest.name && !!manifest.theme_color, `Name: "${manifest.name}"`);
  } catch (e) {
    record('PWA', 'site.webmanifest Validation', false, e.message);
  }
} else {
  record('PWA', 'site.webmanifest Presence', false, 'Missing manifest');
}

// 5. OpenGraph Image File
if (fs.existsSync(ogImagePath)) {
  const stat = fs.statSync(ogImagePath);
  record('Social Share', 'og-image.svg Visual Asset', stat.size > 1000, `Size: ${(stat.size / 1024).toFixed(2)} KB`);
} else {
  record('Social Share', 'og-image.svg Visual Asset', false, 'Missing og-image.svg');
}

console.log('\n========================================');
const passCount = tests.filter(t => t.passed).length;
console.log(`Summary: ${passCount} / ${tests.length} SEO Checks Passed (${((passCount / tests.length) * 100).toFixed(1)}%)`);
console.log('========================================\n');
if (passCount !== tests.length) process.exitCode = 1;
