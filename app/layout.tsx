import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: '南怀瑾文化传承网 - 传统智慧的现代传播平台',
    template: '%s | 南怀瑾文化传承网'
  },
  description: '专业的南怀瑾文化传承平台，深入了解南怀瑾先生的思想智慧，学习儒释道三家精髓。提供经典著作导读、修行指导、静坐计时器等实用工具，传承中华优秀传统文化，在古圣先贤的智慧中找到现代人生的指引。',
  keywords: ['南怀瑾', '传统文化', '国学', '儒释道', '禅宗', '修行', '静坐', '冥想', '经典著作', '论语别裁', '金刚经说什么', '老子他说', '易经杂说', '文化传承', '智慧', '人生哲学', '修身养性', '心灵成长'],
  authors: [{ name: '南怀瑾文化传承网' }],
  creator: '南怀瑾文化传承网',
  publisher: '南怀瑾文化传承网',
  applicationName: '南怀瑾文化传承网',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nanhuaijin-culture.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://nanhuaijin-culture.vercel.app',
    title: '南怀瑾文化传承网 - 传统智慧的现代传播平台',
    description: '专业的南怀瑾文化传承平台，深入了解南怀瑾先生的思想智慧，学习儒释道三家精髓，传承中华优秀传统文化。',
    siteName: '南怀瑾文化传承网',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '南怀瑾文化传承网 - 传统智慧的现代传播',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '南怀瑾文化传承网 - 传统智慧的现代传播平台',
    description: '专业的南怀瑾文化传承平台，深入了解南怀瑾先生的思想智慧，学习儒释道三家精髓，传承中华优秀传统文化。',
    images: ['/og-image.png'],
    creator: '@nanhuaijin_culture',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: '教育文化',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}