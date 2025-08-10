import { Metadata } from 'next'
import Link from 'next/link'
import { User, BookOpen, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: '文化介绍',
  description: '深入了解南怀瑾先生的生平思想，探索传统文化的深厚底蕴和现代价值',
  keywords: ['南怀瑾生平', '传统文化', '思想体系', '文化传承'],
}

const sections = [
  {
    title: '生平简介',
    description: '了解南怀瑾先生的人生历程，从求学到传道的完整轨迹',
    icon: User,
    href: '/culture/biography',
    color: 'from-primary-500 to-primary-600'
  },
  {
    title: '思想体系',
    description: '探索南师融汇儒释道三家的独特思想体系和哲学观点',
    icon: BookOpen,
    href: '/culture/philosophy', 
    color: 'from-accent-500 to-accent-600'
  },
  {
    title: '文化影响',
    description: '南师对现代文化传承和教育事业的深远影响和贡献',
    icon: Heart,
    href: '/culture/influence',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    title: '国际传播',
    description: '中华文化通过南师的努力在世界范围内的传播和影响',
    icon: Globe,
    href: '/culture/international',
    color: 'from-sage-500 to-sage-600'
  }
]

export default function CulturePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            文化介绍
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            南怀瑾先生（1918-2012），当代著名的国学大师、教育家、文化传播者。
            他一生致力于中华传统文化的传承与弘扬，融汇儒释道三家思想，
            用现代语言阐释古代智慧，为传统文化的现代传播做出了卓越贡献。
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group card-elegant p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {section.title}
              </h2>
              <p className="text-primary-700 leading-relaxed mb-4">
                {section.description}
              </p>
              <div className="flex items-center text-primary-600 group-hover:text-primary-800 transition-colors">
                <span className="font-medium">深入了解</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            )
          })}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium text-primary-800 mb-6 leading-relaxed">
              "我一生致力于中华传统文化的传承，希望能够为后世留下一些有价值的东西，
              让古圣先贤的智慧能够在现代社会中继续发光发热。"
            </blockquote>
            <cite className="text-lg text-primary-600 font-semibold">
              — 南怀瑾
            </cite>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-8">继续探索</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/books" className="btn-primary">
              浏览经典著作
            </Link>
            <Link href="/tools" className="btn-secondary">
              实修工具
            </Link>
            <Link href="/learning" className="btn-secondary">
              开始学习之旅
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}