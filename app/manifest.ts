import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '南怀瑾文化传承网',
    short_name: '南怀瑾文化',
    description: '专业的南怀瑾文化传承平台，深入了解南怀瑾先生的思想智慧，学习儒释道三家精髓',
    start_url: '/',
    display: 'standalone',
    background_color: '#fef7ed',
    theme_color: '#b8904a',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'lifestyle', 'books'],
    lang: 'zh-CN',
    orientation: 'portrait-primary',
  }
}