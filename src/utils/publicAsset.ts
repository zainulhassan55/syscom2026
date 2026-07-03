/** Resolve a path under `public/` for GitHub Pages, subpaths, or custom domains. */
export function publicAsset(path: string): string {
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}

/** React Router basename derived from Vite `base` config. */
export function routerBasename(): string {
  const base = import.meta.env.BASE_URL
  if (base === '/') return ''
  return base.replace(/\/$/, '')
}
