import { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Moon, Heart, Brain, CheckCircle, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: '日常修行 - 南怀瑾文化传承',
  description: '将修行融入日常生活的实用方法和指导',
}

export default function DailyPracticePage() {
  const dailySchedule = [
    {
      time: '清晨 (5:30-7:00)',
      icon: Sun,
      title: '晨起修行',
      practices: [
        '起床后先静坐10-30分钟',
        '诵读经典或智慧语录',
        '制定一天的修行目标',
        '感恩祈愿，调整心态'
      ],
      benefits: '清净心灵，为一天注入正能量'
    },
    {
      time: '上午 (工作时间)',
      icon: Brain,
      title: '工作中的修行',
      practices: [
        '保持正念，专注当下',
        '以慈悲心对待同事',
        '遇到困难时深呼吸调节',
        '工作间隙简短静心'
      ],
      benefits: '提高工作效率，减少压力'
    },
    {
      time: '中午 (12:00-13:00)',
      icon: Heart,
      title: '午间调息',
      practices: [
        '用餐时保持感恩心',
        '午休时简单静坐',
        '观察呼吸，放松身心',
        '回顾上午的修行'
      ],
      benefits: '恢复精力，保持内心平静'
    },
    {
      time: '晚上 (19:00-21:00)',
      icon: Moon,
      title: '晚课修行',
      practices: [
        '阅读经典著作',
        '反思一天的言行',
        '静坐冥想20-40分钟',
        '记录修行心得'
      ],
      benefits: '总结反思，深化理解'
    }
  ]

  const practiceAreas = [
    {
      title: '正念生活',
      description: '在日常活动中保持觉知',
      methods: [
        '吃饭时专注品味食物',
        '走路时感受每一步',
        '说话前先思考三秒',
        '听别人说话时全神贯注'
      ]
    },
    {
      title: '慈悲实践',
      description: '培养对他人的慈悲心',
      methods: [
        '对家人朋友表达关爱',
        '帮助需要帮助的人',
        '原谅他人的过错',
        '为众生的幸福祈愿'
      ]
    },
    {
      title: '智慧应用',
      description: '将所学智慧运用到生活中',
      methods: [
        '遇事先冷静思考',
        '用传统智慧解决问题',
        '保持谦逊的学习态度',
        '在困境中寻找成长机会'
      ]
    }
  ]

  const commonChallenges = [
    {
      challenge: '时间不够',
      solution: '从每天5分钟开始，逐渐增加。利用碎片时间，如等车、排队时简短静心。'
    },
    {
      challenge: '容易忘记',
      solution: '设置手机提醒，在固定地点放置提示卡片，与家人朋友互相提醒。'
    },
    {
      challenge: '环境嘈杂',
      solution: '学会在任何环境中保持内心宁静，噪音也可以成为修行的对象。'
    },
    {
      challenge: '效果不明显',
      solution: '修行是长期过程，要有耐心。记录每日感受，会发现细微的变化。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              日常修行指导
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              修行不在深山古寺，而在日常生活的点点滴滴。
              学会将智慧融入每一个当下，让生活本身成为最好的修行道场。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 一日修行时间表 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">一日修行时间表</h2>
          <div className="space-y-6">
            {dailySchedule.map((schedule, index) => {
              const IconComponent = schedule.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 mr-3">
                          {schedule.title}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {schedule.time}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{schedule.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h4 className="font-semibold text-gray-900 mb-3">具体实践：</h4>
                    <ul className="space-y-2">
                      {schedule.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 修行要点 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">三大修行要点</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.methods.map((method, methodIndex) => (
                    <li key={methodIndex} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 常见挑战与解决方案 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">常见挑战与解决方案</h2>
          <div className="space-y-6">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  挑战：{item.challenge}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>解决方案：</strong>{item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 修行记录建议 */}
        <section className="mb-12">
          <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">修行记录建议</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">每日记录</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 今天的修行时间和内容</li>
                  <li>• 遇到的困难和解决方法</li>
                  <li>• 内心的感受和体验</li>
                  <li>• 对经典的新理解</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">定期回顾</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 每周总结修行进展</li>
                  <li>• 每月评估修行效果</li>
                  <li>• 调整修行方法和目标</li>
                  <li>• 与同道分享心得体会</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 重要提醒 */}
        <section className="mb-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">重要提醒</h3>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>循序渐进：</strong>不要一开始就给自己太大压力，从简单的开始</p>
              <p>• <strong>持之以恒：</strong>每天坚持比偶尔长时间修行更重要</p>
              <p>• <strong>保持平常心：</strong>不要执著于修行的效果和境界</p>
              <p>• <strong>理实结合：</strong>理论学习与实际修行要相互配合</p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开始您的日常修行</h3>
            <p className="text-gray-600 mb-6">
              修行就在当下，就在生活的每一个细节中。让我们从今天开始，将智慧融入生活。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/meditation-timer" className="btn-primary inline-flex items-center">
                开始静坐修行
                <Clock className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tools/notes" className="btn-secondary inline-flex items-center">
                记录修行心得
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}