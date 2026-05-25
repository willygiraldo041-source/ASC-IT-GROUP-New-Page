/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ascitgroup.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/staging/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/staging', '/_next'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq por tipo de página
    const priority = getPriority(path)
    const changefreq = getChangeFreq(path)

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

function getPriority(path) {
  if (path === '/') return 1.0
  if (path.startsWith('/services')) return 0.9
  if (path.startsWith('/case-studies')) return 0.8
  if (path.startsWith('/blog')) return 0.7
  if (path.startsWith('/about')) return 0.6
  return 0.5
}

function getChangeFreq(path) {
  if (path === '/') return 'weekly'
  if (path.startsWith('/blog')) return 'weekly'
  if (path.startsWith('/case-studies')) return 'monthly'
  if (path.startsWith('/services')) return 'monthly'
  return 'yearly'
}
