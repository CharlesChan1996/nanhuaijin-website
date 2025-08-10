import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '初学者入门 - 南怀瑾文化传承',
  description: '适合刚接触南怀瑾思想的朋友的系统学习路径',
}

export default function BeginnerLearningPage() {
  const curriculum = [
    {
      week: '第1-2周',
      title: '了解南怀瑾先生',
      books: ['南怀瑾先生生平简介'],
      goals: ['了解先生的生平经历', '理解其思想背景', '建立学习兴趣'],
      completed: false
    },
    {
      week: '第3-6周',
      title: '儒家经典入门',
      books: ['论语别裁（上）'],
      goals: ['理解孔子思想精髓', '学习做人做事道理', '培养正确价值观'],
      completed: false
    },
    {
      week: '第7-10周',
      title: '继续儒家学习',
      books: ['论语别裁（下）', '孟子旁通（选读）'],
      goals: ['深化儒家思想理解', '学习修身养性', '实践日常生活'],
      completed: false
    },
    {
      week: '第11-16周',
      title: '道家智慧',
      books: ['老子他说'],
      goals: ['理解道家哲学', '学习无为而治', '体悟自然之道'],
      completed: false
    },
    {
      week: '第17-20周',
      title: '综合实践',
      books: ['历史的经验'],
      goals: ['融会贯通所学', '结合历史思考', '形成个人见解'],
      completed: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              初学者入门路径
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              为初次接触南怀瑾思想的朋友精心设计的20周学习计划，
              循序渐进地引导您走进传统文化的智慧殿堂。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 学习概览 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">学习概览</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">20周</div>
                <div className="text-gray-600">学习周期</div>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5本</div>
                <div className="text-gray-600">核心书目</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15个</div>
                <div className="text-gray-600">学习目标</div>
              </div>
            </div>
          </div>
        </section>

        {/* 学习计划 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">详细学习计划</h2>
          <div className="space-y-6">
            {curriculum.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {phase.week}
                    </span>
                  </div>
                  <CheckCircle className={`h-6 w-6 ${phase.completed ? 'text-green-600' : 'text-gray-300'}`} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">推荐书目</h4>
                    <ul className="space-y-2">
                      {phase.books.map((book, bookIndex) => (
                        <li key={bookIndex} className="flex items-center text-gray-700">
                          <BookOpen className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          {book}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">学习目标</h4>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, goalIndex) => (
                        <li key={goalIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 学习建议 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">学习建议</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">阅读方法</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 每天安排固定的阅读时间，建议30-60分钟</li>
                <li>• 先通读全文，再精读重点章节</li>
                <li>• 做好读书笔记，记录感悟和疑问</li>
                <li>• 结合生活实际，思考如何应用</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">实践要点</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• 理论学习与日常实践相结合</li>
                <li>• 保持谦逊的学习态度</li>
                <li>• 多与同道交流讨论</li>
                <li>• 定期回顾和总结所学</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开始您的学习之旅</h3>
            <p className="text-gray-600 mb-6">
              准备好了吗？让我们一起踏上这段充满智慧的学习旅程。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/books" className="btn-primary inline-flex items-center">
                浏览推荐书目
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tools/reading-plan" className="btn-secondary inline-flex items-center">
                制定阅读计划
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}