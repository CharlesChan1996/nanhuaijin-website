import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, Star, ArrowRight } from 'lucide-react'
import booksData from '@/data/books.json'

export const metadata: Metadata = {
  title: '经典著作',
  description: '探索南怀瑾先生的经典著作，从儒释道三家经典到修行实践指导，系统学习传统智慧',
  keywords: ['南怀瑾著作', '论语别裁', '金刚经说什么', '静坐修道', '传统文化经典'],
}

const difficultyColors = {
  '初级': 'bg-green-100 text-green-800',
  '中级': 'bg-yellow-100 text-yellow-800', 
  '高级': 'bg-red-100 text-red-800'
}

const categoryColors = {
  '儒家经典': 'from-primary-500 to-primary-600',
  '佛学经典': 'from-accent-500 to-accent-600',
  '道家经典': 'from-secondary-500 to-secondary-600',
  '修行实践': 'from-sage-500 to-sage-600',
  '易学经典': 'from-primary-400 to-accent-500'
}

export default function BooksPage() {
  const { books, categories } = booksData

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            经典著作
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            南怀瑾先生一生著述丰富，涵盖儒释道三家经典的现代阐释。
            这些著作以深入浅出的方式，将古代智慧与现代生活相结合，
            为现代人提供了宝贵的精神财富和人生指导。
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="card-elegant p-4 text-center hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[category.name as keyof typeof categoryColors]} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">{category.name}</h3>
              <p className="text-sm text-primary-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="card-elegant p-6 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Book Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[book.difficulty as keyof typeof difficultyColors]}`}>
                    {book.difficulty}
                  </div>
                  <div className="flex items-center text-sm text-primary-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{book.pages}页</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {book.title}
                </h3>
                <p className="text-sm text-primary-600 mb-3">{book.subtitle}</p>
                <p className="text-primary-700 leading-relaxed text-sm">
                  {book.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {book.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {book.tags.length > 3 && (
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-xs">
                    +{book.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Key Points */}
              <div className="mb-4">
                <h4 className="font-semibold text-primary-900 mb-2 text-sm">核心要点：</h4>
                <ul className="space-y-1">
                  {book.keyPoints.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="text-sm text-primary-700 flex items-start">
                      <Star className="w-3 h-3 mr-2 mt-0.5 text-primary-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reading Guide */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary-900 mb-2 text-sm">阅读建议：</h4>
                <p className="text-sm text-primary-600 leading-relaxed">
                  {book.readingGuide}
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`/books/${book.id}`}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group"
              >
                <span>详细了解</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            开始您的阅读之旅
          </h2>
          <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
            建议从《论语别裁》开始，逐步深入学习各家经典。
            每本书都是智慧的宝库，值得反复品读。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learning/path" className="btn-primary">
              制定阅读计划
            </Link>
            <Link href="/books/recommended" className="btn-secondary">
              查看推荐书单
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}