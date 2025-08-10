import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nanhuaijin-culture.vercel.app'
  
  // Static pages with SEO priorities
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/culture', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/culture/biography', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/culture/philosophy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/culture/influence', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/culture/international', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/books', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/learning', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/learning/path', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/learning/beginner', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/learning/intermediate', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/learning/advanced', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/practice/meditation', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/practice/daily', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/practice/reading', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/practice/faq', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/tools', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/tools/meditation-timer', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/tools/practice-calendar', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/tools/notes', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/tools/reading-plan', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/tools/daily-quote', priority: 0.6, changeFrequency: 'daily' as const },
  ]

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}