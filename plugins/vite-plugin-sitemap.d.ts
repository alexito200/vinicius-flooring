import type { Plugin } from 'vite';

type SitemapRoute = {
  path: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
};

type SitemapOptions = {
  hostname: string;
  routes: Array<string | SitemapRoute>;
  changefreq?: string;
  priority?: number;
};

export declare function ViteSitemapPlugin(options: SitemapOptions): Plugin;

export default ViteSitemapPlugin;
