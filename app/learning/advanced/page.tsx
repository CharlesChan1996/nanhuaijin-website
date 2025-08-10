import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Star, CheckCircle, ArrowRight, Compass, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: '深度实修 - 南怀瑾文化传承',
  description: '理论与实践相结合的高级修行指导',
}

export default function AdvancedLearningPage() {
  const practiceAreas = [
    {
      title: '禅修实践',
      description: '深入禅定修行，开发内在智慧',
      books: ['如何修证佛法', '定慧初修'],
      practices: ['静坐禅修', '行禅练习', '日常觉知', '公案参究'],
      level: '高级'
    },
    {
      title: '生活修行',
      description: '将修行融入日常，在生活中证道',
      books: ['学佛者的基本信念', '现代学佛者修证对话'],
      practices: ['正念生活', '慈悲实践', '智慧应用', '服务他人'],
      level: '实用'
    },
    {
      title: '经典研究',
      description: '深入研究经典，传承智慧文化',
      books: ['楞严大义今释', '楞伽大义今释'],
      practices: ['经典研读', '义理辨析', '心得分享', '文化传承'],
      level: '学术'
    }
  ]

  const milestones = [
    {
      stage: '入门阶段',
      duration: '1-2年',
      description: '建立正确见解，培养基础修行习惯',
      indicators: ['理解基本概念', '建立修行习惯', '体验初步效果']
    },
    {
      stage: '深入阶段',
      duration: '3-5年', 
      description: '深化理解，稳定修行，获得实际体验',
      indicators: ['理论融会贯通', '修行稳定持续', '生活明显改善']
    },
    {
      stage: '成熟阶段',
      duration: '5-10年',
      description: '理实一如，自然流露，能够指导他人',
      indicators: ['智慧自然流露', '慈悲心增长', '能够利益他人']
    },
    {
      stage: '圆满阶段',
      duration: '终生修行',
      description: '持续精进，永无止境，成为智慧的化身',
      indicators: ['无我利他', '智慧圆满', '功德无量']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              深度实修路径
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              理论与实践相结合的终生修行指导，帮助您在智慧之路上持续精进，
              最终达到自利利他的圆满境界。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 修行理念 */}
        <section className="mb-12">
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">深度实修理念</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">理实一如</div>
                <div className="text-gray-600">理论与实践完美结合</div>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">慈悲智慧</div>
                <div className="text-gray-600">培养无私的慈悲心</div>
              </div>
              <div className="text-center">
                <Compass className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">终生修行</div>
                <div className="text-gray-600">持续精进永不停息</div>
              </div>
            </div>
          </div>
        </section>

        {/* 三大修行领域 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">三大修行领域</h2>
          <div className="space-y-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">
                        {area.title}
                      </h3>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                        {area.level}
                      </span>
                    </div>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">核心典籍</h4>
                    <ul className="space-y-2">
                      {area.books.map((book, bookIndex) => (
                        <li key={bookIndex} className="flex items-center text-gray-700">
                          <BookOpen className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                          {book}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">修行方法</h4>
                    <ul className="space-y-2">
                      {area.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 修行里程碑 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">修行里程碑</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{milestone.stage}</h3>
                      <span className="text-gray-500 text-sm">{milestone.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 ml-12">{milestone.description}</p>
                
                <div className="ml-12">
                  <h4 className="font-semibold text-gray-900 mb-2">主要指标：</h4>
                  <ul className="space-y-1">
                    {milestone.indicators.map((indicator, indicatorIndex) => (
                      <li key={indicatorIndex} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                        {indicator}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 实修指导 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">实修要点</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">日常修行</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>晨起修行：</strong>每日清晨静坐30-60分钟</li>
                <li>• <strong>正念生活：</strong>在日常活动中保持觉知</li>
                <li>• <strong>晚课反省：</strong>每晚反思一天的修行</li>
                <li>• <strong>定期闭关：</strong>定期进行短期密集修行</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">修行态度</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>持之以恒：</strong>无论顺逆都要坚持修行</li>
                <li>• <strong>谦逊学习：</strong>永远保持学习的心态</li>
                <li>• <strong>慈悲利他：</strong>以利益众生为最终目标</li>
                <li>• <strong>智慧观照：</strong>用智慧观察一切现象</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 警示提醒 */}
        <section className="mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">修行警示</h3>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>避免我慢：</strong>修行有所成就时，更要保持谦逊，避免傲慢心生起</p>
              <p>• <strong>不执著相：</strong>不要执著于任何修行境界或神通感应</p>
              <p>• <strong>正知正见：</strong>始终保持正确的知见，不偏不倚</p>
              <p>• <strong>善知识：</strong>亲近善知识，远离恶友，接受正确指导</p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开始深度实修</h3>
            <p className="text-gray-600 mb-6">
              深度实修需要坚定的决心和持续的努力，让我们一起在智慧之路上精进不懈。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/meditation-timer" className="btn-primary inline-flex items-center">
                开始静坐修行
                <Star className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tools/practice-calendar" className="btn-secondary inline-flex items-center">
                制定修行计划
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}