import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, User, Tag, Calendar, TrendingUp, Star, Filter } from 'lucide-react'
import articlesData from '@/data/articles.json'

export const metadata: Metadata = {
  title: '修习文章 - 南怀瑾文化传承',
  description: '南怀瑾先生的修习指导文章集，包含实修要领、修持方法和重要开示，为修学者提供权威指导',
  keywords: ['修习文章', '修持指导', '实修要领', '南怀瑾开示', '修行方法'],
}

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

const categories = ['全部', '修持指导', '理论阐述', '实修体验', '答疑解惑']
const difficulties = ['初级', '中级', '高级']

export default function ArticlesPage() {
  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              修习文章
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              南怀瑾先生的修习指导文章集，涵盖实修要领、修持方法和重要开示，
              为修学者提供权威的理论指导和实践方法。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 筛选栏 */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">文章筛选</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">分类</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">难度</label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(difficulty => (
                    <button
                      key={difficulty}
                      className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(difficulty)}`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 精选文章 */}
        {featuredArticles.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">精选文章</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">{article.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">{article.summary}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
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
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-blue-600 font-medium group-hover:text-blue-700">
                          阅读全文 →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 所有文章 */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">所有文章</h2>
            <span className="text-sm text-gray-500">({articles.length} 篇)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    {article.featured && (
                      <Star className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{article.category}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.summary}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-3">
                    <span>{formatDate(article.publishDate)}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    阅读 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 空状态 */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无文章</h3>
            <p className="text-gray-500">更多精彩文章正在准备中...</p>
          </div>
        )}
      </div>
    </div>
  )
}