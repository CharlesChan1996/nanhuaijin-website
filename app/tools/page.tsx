import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Calendar, BookOpen, Heart, Timer, PenTool } from 'lucide-react'

export const metadata: Metadata = {
  title: '实修工具',
  description: '提供静坐计时器、修行日历、学习笔记等实用工具，助您在修行路上稳步前进',
  keywords: ['静坐计时器', '修行日历', '学习笔记', '修行工具', '实修指导'],
}

const tools = [
  {
    name: '静坐计时器',
    description: '专业的静坐计时工具，支持多种提醒方式和时长设置',
    icon: Timer,
    href: '/tools/meditation-timer',
    color: 'from-primary-500 to-primary-600',
    features: ['自定义时长', '音声提醒', '进度记录', '统计分析']
  },
  {
    name: '修行日历',
    description: '记录每日修行情况，培养持续修行的好习惯',
    icon: Calendar,
    href: '/tools/practice-calendar',
    color: 'from-accent-500 to-accent-600',
    features: ['日程安排', '习惯追踪', '进度可视化', '目标设定']
  },
  {
    name: '学习笔记',
    description: '记录学习心得和感悟，建立个人的智慧宝库',
    icon: PenTool,
    href: '/tools/notes',
    color: 'from-secondary-500 to-secondary-600',
    features: ['富文本编辑', '分类管理', '搜索功能', '导出备份']
  },
  {
    name: '个人收藏',
    description: '收藏喜欢的内容，建立个人学习资料库',
    icon: Heart,
    href: '/tools/notes',
    color: 'from-sage-500 to-sage-600',
    features: ['内容收藏', '标签分类', '快速检索', '分享功能']
  },
  {
    name: '阅读进度',
    description: '追踪书籍阅读进度，制定合理的学习计划',
    icon: BookOpen,
    href: '/tools/reading-plan',
    color: 'from-primary-400 to-accent-500',
    features: ['进度追踪', '阅读统计', '目标设定', '成就系统']
  },
  {
    name: '每日一言',
    description: '每天推送一句智慧语录，启发思考和感悟',
    icon: Clock,
    href: '/tools/daily-quote',
    color: 'from-accent-400 to-secondary-500',
    features: ['每日更新', '历史回顾', '分享功能', '个性推荐']
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            实修工具
          </h1>
          <div className="section-divider"></div>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            为您的修行之路提供实用的数字化工具。这些工具基于传统修行方法设计，
            结合现代技术，帮助您建立良好的修行习惯，记录成长历程，
            让古老的智慧在现代生活中发挥指导作用。
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon
            return (
              <Link
                key={tool.name}
                href={tool.href}
                className="group card-elegant p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                {tool.name}
              </h3>
              
              <p className="text-primary-700 leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-primary-600">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center text-primary-600 group-hover:text-primary-800 transition-colors">
                <span className="font-medium">开始使用</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            )
          })}
        </div>

        {/* Usage Tips */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
            使用建议
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                初学者建议
              </h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2"></div>
                  <span>从静坐计时器开始，建立每日静坐的习惯</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2"></div>
                  <span>使用修行日历记录每日的修行情况</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2"></div>
                  <span>通过学习笔记记录感悟和心得</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                进阶使用
              </h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 mt-2"></div>
                  <span>结合阅读进度工具制定系统的学习计划</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 mt-2"></div>
                  <span>利用收藏功能建立个人的智慧资料库</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 mt-2"></div>
                  <span>通过每日一言保持对智慧的思考</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            开始您的数字化修行之旅
          </h2>
          <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto">
            这些工具将帮助您在现代生活中更好地实践传统智慧，
            建立持续的修行习惯，记录成长的每一步。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tools/meditation-timer" className="btn-primary">
              开始静坐修行
            </Link>
            <Link href="/learning/practice" className="btn-secondary">
              查看修行指导
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}