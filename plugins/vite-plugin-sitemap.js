import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const defaultChangefreq = 'monthly';
const defaultPriority = 0.8;

function normaliseUrl(hostname, path) {
  const base = hostname.endsWith('/') ? hostname.slice(0, -1) : hostname;
  const normalisedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalisedPath}`;
}

export function ViteSitemapPlugin(options) {
  let outDir = 'dist';

  return {
    name: 'local-vite-plugin-sitemap',
    apply: 'build',
    configResolved(config) {
      outDir = (config.build && config.build.outDir) || 'dist';
    },
    async writeBundle() {
      const urlEntries = options.routes.map((route) => {
        const routeConfig = typeof route === 'string' ? { path: route } : route;
        const loc = normaliseUrl(options.hostname, routeConfig.path);
        const changefreq = routeConfig.changefreq || options.changefreq || defaultChangefreq;
        const priority = routeConfig.priority ?? options.priority ?? defaultPriority;
        const lastmod = routeConfig.lastmod;

        return [
          '<url>',
          `<loc>${loc}</loc>`,
          changefreq ? `<changefreq>${changefreq}</changefreq>` : '',
          priority != null ? `<priority>${priority.toFixed(1)}</priority>` : '',
          lastmod ? `<lastmod>${lastmod}</lastmod>` : '',
          '</url>',
        ]
          .filter(Boolean)
          .join('');
      });

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries.join('')}</urlset>\n`;
      const outputPath = resolve(outDir, 'sitemap.xml');

      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, sitemap, 'utf8');
    },
  };
}

export default ViteSitemapPlugin;
