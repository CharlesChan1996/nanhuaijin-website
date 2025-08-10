import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/'],
    },
    sitemap: 'https://nanhuaijin-culture.vercel.app/sitemap.xml',
    host: 'https://nanhuaijin-culture.vercel.app',
  }
}