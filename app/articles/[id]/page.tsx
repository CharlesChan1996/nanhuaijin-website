import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, Eye } from 'lucide-react'
import articlesData from '@/data/articles.json'

interface Article {
  id: string
  title: string
  subtitle: string
  author: string
  category: string
  tags: string[]
  publishDate: string
  readTime: string
  summary: string
  content: string
  featured: boolean
  difficulty: string
  views: number
}

const articles: Article[] = articlesData

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const article = articles.find(a => a.id === id)
  
  if (!article) {
    return {
      title: '文章未找到 - 南怀瑾文化传承',
      description: '抱歉，您访问的文章不存在。'
    }
  }

  return {
    title: `${article.title} - 南怀瑾文化传承`,
    description: article.summary,
    keywords: [article.title, article.author, ...article.tags].join(', '),
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

async function getArticleContent(filename: string): Promise<string> {
  try {
    // 在实际应用中，这里会读取文件内容
    // 现在返回一个示例内容
    if (filename === '准提法修持要领开示.txt') {
      return `# 准提法修持要领开示

## 前言

准提法是佛教密宗中的重要修持法门，以其简便易行而广为流传。南怀瑾先生对准提法有着深入的研究和实修体验，本文整理了先生关于准提法修持要领的重要开示。

## 修持要领

### 一、持咒要点

准提咒的持诵需要注意以下几个要点：

1. **发音准确**：咒语的发音要准确，每个字都要清晰分明
2. **心念专一**：持咒时心念要专注，不可散乱
3. **数量规定**：初学者可从每日108遍开始，逐渐增加

### 二、观想方法

在持咒的同时，需要配合观想：

1. **观想准提菩萨**：心中观想准提菩萨的庄严法相
2. **观想光明**：想象菩萨放出清净光明，照耀自身
3. **观想净化**：光明净化自己的身心，消除业障

### 三、修持时间

关于修持的时间安排：

- **最佳时间**：清晨4-6点，此时心境最为清净
- **次佳时间**：晚上7-9点，一天工作结束后
- **持续性**：每日坚持，不可间断

### 四、注意事项

修持过程中需要注意：

1. **环境清净**：选择安静、清洁的环境
2. **身心准备**：修持前要洗手漱口，整理衣冠
3. **恭敬心**：以恭敬心对待法门，不可轻慢
4. **回向功德**：修持结束后要回向功德

## 修持境界

### 初级阶段

- 能够专心持咒，不受外界干扰
- 心中能够清晰观想准提菩萨
- 感受到内心的宁静和喜悦

### 中级阶段

- 持咒时能够达到心咒合一的境界
- 观想更加清晰，能够感受到光明
- 日常生活中也能保持正念

### 高级阶段

- 达到无念而念，念而无念的境界
- 时时刻刻都在修持中
- 证得准提三昧

## 常见问题

### 问：持咒时妄念很多怎么办？

答：这是正常现象，不要排斥妄念，也不要跟随妄念，只要温和地将注意力回到咒语上即可。

### 问：观想不清楚怎么办？

答：观想需要逐渐培养，初学者可以先看准提菩萨的画像，熟悉后再闭眼观想。

### 问：修持多久能见效？

答：因人而异，有的人几天就有感应，有的人需要几个月甚至几年。重要的是持之以恒。

## 结语

准提法是殊胜的修持法门，但需要正确的方法和持续的努力。希望修学者能够依照这些要领认真修持，必能获得法益。

愿一切众生都能得到准提菩萨的加持，早日成就菩提！`
    }
    return '文章内容正在加载中...'
  } catch (error) {
    return '文章内容加载失败，请稍后重试。'
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = articles.find(a => a.id === id)
  
  if (!article) {
    notFound()
  }

  const content = await getArticleContent(article.content)
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-800'
      case '中级': return 'bg-yellow-100 text-yellow-800'
      case '高级': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // 简单的Markdown渲染（可以后续使用专业的Markdown库）
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">{line.substring(3)}</h2>
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-5">{line.substring(4)}</h3>
        } else if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-700 mb-2">{line.substring(2)}</li>
        } else if (line.match(/^\d+\. /)) {
          return <li key={index} className="text-gray-700 mb-2">{line.replace(/^\d+\. /, '')}</li>
        } else if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-semibold text-gray-900 mb-3">{line.slice(2, -2)}</p>
        } else if (line.trim() === '') {
          return <br key={index} />
        } else {
          return <p key={index} className="text-gray-700 mb-3 leading-relaxed">{line}</p>
        }
      })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 返回按钮 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/articles" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回文章列表
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 文章头部 */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(article.difficulty)}`}>
              {article.difficulty}
            </span>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-xl text-gray-600 mb-6">
              {article.subtitle}
            </p>
          )}
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{article.views} 次阅读</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {article.summary}
            </p>
          </div>
        </header>

        {/* 文章内容 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            {renderContent(content)}
          </div>
        </div>

        {/* 文章底部 */}
        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>分享文章</span>
              </button>
            </div>
            
            <Link 
              href="/articles" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>更多文章</span>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}