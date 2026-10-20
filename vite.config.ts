import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { SITE, getRoutes, type RouteMeta } from './src/data/siteMeta'

const ROUTE_META_BLOCK = /<!-- route-meta:start[\s\S]*?route-meta:end -->/

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// GitHub Pages serves /blog/x/index.html at /blog/x/, so canonical URLs use the trailing slash
const pageUrl = (routePath: string) => `${SITE.url}${routePath === '/' ? '/' : `${routePath}/`}`

function headTags(route: RouteMeta | null) {
  if (!route) {
    return [`<title>Page not found | ${escapeHtml(SITE.name)}</title>`, '<meta name="robots" content="noindex" />']
  }

  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const image = `${SITE.url}${route.image}`
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${pageUrl(route.path)}" />`,
    `<meta property="og:type" content="${route.type}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${pageUrl(route.path)}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]

  if (route.path === '/') {
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE.author,
      jobTitle: 'Senior Software Engineer',
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Zagreb', addressCountry: 'HR' },
      sameAs: [SITE.linkedin],
    }
    tags.push(`<script type="application/ld+json">${JSON.stringify(person)}</script>`)
  }

  return tags
}

// Writes a static HTML file per route with its own <title> and Open Graph tags (link previews don't run JS),
// plus 404.html (GitHub Pages' fallback, which boots the SPA), sitemap.xml and robots.txt.
function prerenderRoutes(): Plugin {
  let outDir = 'dist'

  return {
    name: 'prerender-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      if (!ROUTE_META_BLOCK.test(template)) {
        throw new Error('prerender-routes: route-meta markers are missing from index.html')
      }
      const render = (route: RouteMeta | null) =>
        template.replace(ROUTE_META_BLOCK, headTags(route).join('\n    '))

      const routes = getRoutes()
      for (const route of routes) {
        const file =
          route.path === '/'
            ? path.join(outDir, 'index.html')
            : path.join(outDir, route.path.slice(1), 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, render(route))
      }
      fs.writeFileSync(path.join(outDir, '404.html'), render(null))

      const urls = routes.map((route) => `  <url><loc>${pageUrl(route.path)}</loc></url>`).join('\n')
      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      )
      fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prerenderRoutes()],
  base: '/',
})
