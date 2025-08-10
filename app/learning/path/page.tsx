import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Users, Star, ArrowRight, CheckCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '学习路径规划 - 南怀瑾文化传承',
  description: '为不同基础的学习者提供个性化的学习路径规划',
}

export default function LearningPathPage() {
  const pathOptions = [
    {
      id: 'beginner',
      title: '初学者路径',
      subtitle: '零基础入门',
      duration: '3-6个月',
      difficulty: '入门',
      description: '适合完全没有接触过传统文化的朋友，从最基础的概念开始，循序渐进地建立正确的认知。',
      highlights: [
        '了解南怀瑾先生生平',
        '儒家经典入门（论语、孟子）',
        '道家智慧初探（老子）',
        '建立正确的学习方法'
      ],
      books: ['论语别裁', '孟子旁通', '老子他说'],
      color: 'blue',
      icon: BookOpen
    },
    {
      id: 'intermediate',
      title: '进阶路径',
      subtitle: '深入理解',
      duration: '6-12个月',
      difficulty: '中级',
      description: '在初学基础上深入探索，系统学习易学、佛学、禅宗等核心思想，培养更深层的理解。',
      highlights: [
        '易经智慧深入学习',
        '佛学基础与实修',
        '禅宗精神体悟',
        '三教融合理解'
      ],
      books: ['易经杂说', '金刚经说什么', '禅海蠡测'],
      color: 'green',
      icon: Users
    },
    {
      id: 'advanced',
      title: '深度实修路径',
      subtitle: '理实结合',
      duration: '持续修行',
      difficulty: '高级',
      description: '理论与实践相结合的终生修行指导，注重实际体验和生活应用，追求智慧的真正实现。',
      highlights: [
        '深度禅修实践',
        '生活中的修行',
        '经典深度研究',
        '指导他人学习'
      ],
      books: ['如何修证佛法', '定慧初修', '楞严大义今释'],
      color: 'purple',
      icon: Star
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-800',
        badge: 'bg-blue-100',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-800',
        badge: 'bg-green-100',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-800',
        badge: 'bg-purple-100',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              学习路径规划
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据您的基础和兴趣，选择最适合的学习路径。
              每条路径都经过精心设计，确保您能够循序渐进地深入传统文化的智慧宝库。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 路径选择指南 */}
        <section className="mb-12">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">如何选择适合的路径？</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">评估基础</h3>
                <p className="text-gray-600 text-sm">
                  诚实评估自己对传统文化的了解程度，选择合适的起点
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">考虑时间</h3>
                <p className="text-gray-600 text-sm">
                  根据自己的时间安排，选择合适的学习周期和强度
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">明确目标</h3>
                <p className="text-gray-600 text-sm">
                  思考学习的目的，是为了个人修养还是深度研究
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 学习路径卡片 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">选择您的学习路径</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {pathOptions.map((path) => {
              const colors = getColorClasses(path.color)
              const IconComponent = path.icon
              
              return (
                <div
                  key={path.id}
                  className={`${colors.bg} ${colors.border} border-2 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  {/* 路径头部 */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 mb-4">{path.subtitle}</p>
                    
                    <div className="flex justify-center space-x-4 text-sm">
                      <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full font-medium`}>
                        {path.duration}
                      </span>
                      <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full font-medium`}>
                        {path.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* 路径描述 */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  {/* 学习重点 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">学习重点：</h4>
                    <ul className="space-y-2">
                      {path.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 核心书目 */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">核心书目：</h4>
                    <ul className="space-y-2">
                      {path.books.map((book, index) => (
                        <li key={index} className="flex items-center text-gray-700 text-sm">
                          <BookOpen className={`w-4 h-4 ${colors.text} mr-2 flex-shrink-0`} />
                          {book}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 开始按钮 */}
                  <Link
                    href={`/learning/${path.id}`}
                    className={`${colors.button} text-white w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors`}
                  >
                    <span>开始学习</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* 学习建议 */}
        <section>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">学习建议</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">学习态度</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>保持谦逊：</strong>以空杯心态学习，不要有先入为主的观念</li>
                  <li>• <strong>持之以恒：</strong>每天坚持学习，哪怕只有15分钟</li>
                  <li>• <strong>理实结合：</strong>学习理论的同时要在生活中实践</li>
                  <li>• <strong>交流讨论：</strong>与同道交流心得，互相启发</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">学习方法</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>循序渐进：</strong>不要急于求成，按照路径稳步前进</li>
                  <li>• <strong>做好笔记：</strong>记录重要观点和个人感悟</li>
                  <li>• <strong>定期回顾：</strong>定期回顾所学内容，加深理解</li>
                  <li>• <strong>实际应用：</strong>将所学智慧应用到日常生活中</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}