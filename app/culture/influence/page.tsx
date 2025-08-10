import { Metadata } from 'next'
import Link from 'next/link'
import { Users, BookOpen, GraduationCap, Globe, TrendingUp, Heart, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '文化影响 - 南怀瑾文化传承',
  description: '南怀瑾先生对现代文化传承和教育事业的深远影响和贡献',
}

export default function InfluencePage() {
  const influenceAreas = [
    {
      title: '教育事业',
      icon: GraduationCap,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      achievements: [
        '创办东西精华协会，培养文化人才',
        '建立太湖大学堂，传承国学教育',
        '培养了数以万计的学生和弟子',
        '推动传统文化教育的现代化'
      ],
      impact: '南师的教育理念影响了整个华人文化圈的教育方式，让传统文化教育重新焕发生机。'
    },
    {
      title: '学术研究',
      icon: BookOpen,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      achievements: [
        '著作等身，出版60余种图书',
        '开创性地用现代语言阐释古典',
        '建立了完整的国学研究体系',
        '推动了传统文化的学术复兴'
      ],
      impact: '南师的学术成就为传统文化研究开辟了新的道路，影响了无数学者和研究者。'
    },
    {
      title: '文化传播',
      icon: Globe,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      achievements: [
        '让传统文化走向世界各地',
        '在海外建立多个文化中心',
        '促进东西方文化的交流对话',
        '提升了中华文化的国际影响力'
      ],
      impact: '通过南师的努力，中华文化在世界范围内得到了更广泛的认知和尊重。'
    },
    {
      title: '社会影响',
      icon: Users,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      achievements: [
        '影响了几代人的精神追求',
        '推动了国学复兴运动',
        '促进了社会道德风尚的改善',
        '为社会和谐发展贡献智慧'
      ],
      impact: '南师的思想影响深入社会各个层面，为构建和谐社会提供了精神支撑。'
    }
  ]

  const generationalImpact = [
    {
      generation: '第一代弟子',
      period: '1950-1970年代',
      characteristics: [
        '直接受教于南师，深得真传',
        '多为学者、教授、文化工作者',
        '承担起传承和发扬的重任',
        '在各自领域发光发热'
      ],
      representatives: '包括多位知名学者、教授和文化传承人'
    },
    {
      generation: '第二代传人',
      period: '1980-2000年代',
      characteristics: [
        '通过著作和讲座接触南师思想',
        '在改革开放中传播传统文化',
        '推动国学教育的普及',
        '建立各种文化传承机构'
      ],
      representatives: '遍布海内外的文化教育工作者'
    },
    {
      generation: '新生代学习者',
      period: '2000年代至今',
      characteristics: [
        '通过网络和现代媒体学习',
        '将传统智慧与现代生活结合',
        '用新的方式传播传统文化',
        '成为文化复兴的新力量'
      ],
      representatives: '年轻的学者、教师、文化创作者'
    }
  ]

  const culturalRevival = [
    {
      aspect: '国学热潮',
      description: '推动了全社会对传统文化的重新认识',
      manifestations: [
        '各地兴起读经班、国学班',
        '传统文化类图书热销',
        '国学教育进入学校课程',
        '传统文化节目受到欢迎'
      ]
    },
    {
      aspect: '修行文化',
      description: '让静坐、修行等传统修养方式重新流行',
      manifestations: [
        '静坐冥想成为现代人的选择',
        '传统养生方法得到推广',
        '修行理念影响现代生活方式',
        '身心健康观念的转变'
      ]
    },
    {
      aspect: '价值观重塑',
      description: '传统价值观在现代社会中的重新定位',
      manifestations: [
        '重视家庭和人际关系',
        '强调道德修养的重要性',
        '追求内心平静与智慧',
        '关注精神层面的成长'
      ]
    }
  ]

  const internationalImpact = [
    {
      region: '北美地区',
      influence: '在美国、加拿大建立多个文化中心，影响当地华人社区',
      activities: ['大学讲座', '文化中心', '出版翻译', '学术交流']
    },
    {
      region: '欧洲地区',
      influence: '推动中华文化在欧洲的传播，促进东西方文化对话',
      activities: ['文化交流', '学术研讨', '著作翻译', '教育合作']
    },
    {
      region: '亚太地区',
      influence: '在东南亚、日韩等地产生重要影响，推动文化认同',
      activities: ['教育机构', '文化活动', '学术合作', '人才培养']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              文化影响与贡献
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              南怀瑾先生的文化贡献超越了个人学术成就，
              他推动了整个时代的文化复兴，影响了无数人的精神追求。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 主要影响领域 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">主要影响领域</h2>
            <p className="text-lg text-gray-600">
              南师在多个领域都产生了深远的影响，推动了传统文化的全面复兴
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {influenceAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div key={index} className={`${area.color} border-2 rounded-xl p-8`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className={`w-6 h-6 ${area.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">主要成就：</h4>
                    <ul className="space-y-2">
                      {area.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white bg-opacity-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>深远影响：</strong>{area.impact}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 代际传承 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">代际传承</h2>
            <p className="text-lg text-gray-600">
              南师的影响跨越了几代人，形成了持续的文化传承链条
            </p>
          </div>

          <div className="space-y-8">
            {generationalImpact.map((generation, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{generation.generation}</h3>
                    <span className="text-gray-500">{generation.period}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">主要特征：</h4>
                    <ul className="space-y-2">
                      {generation.characteristics.map((characteristic, charIndex) => (
                        <li key={charIndex} className="flex items-start text-gray-700">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          {characteristic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">代表人物：</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {generation.representatives}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 文化复兴 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">推动文化复兴</h2>
            <p className="text-lg text-gray-600">
              南师的努力推动了传统文化在现代社会的全面复兴
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culturalRevival.map((revival, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {revival.aspect}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {revival.description}
                </p>
                <ul className="space-y-2">
                  {revival.manifestations.map((manifestation, manIndex) => (
                    <li key={manIndex} className="flex items-start text-gray-700 text-sm">
                      <Heart className="w-3 h-3 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      {manifestation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 国际影响 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">国际影响</h2>
            <p className="text-lg text-gray-600">
              南师的文化影响力超越了地域界限，在世界各地都有重要影响
            </p>
          </div>

          <div className="space-y-6">
            {internationalImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {impact.region}
                    </h3>
                    <p className="text-gray-700">{impact.influence}</p>
                  </div>
                  <Globe className="w-6 h-6 text-blue-600 flex-shrink-0" />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">主要活动：</h4>
                  <div className="flex flex-wrap gap-2">
                    {impact.activities.map((activity, actIndex) => (
                      <span key={actIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 持续影响 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">持续的影响力</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">现在进行时</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 全球各地的文化中心继续运作</li>
                  <li>• 新一代学者继续研究和传播</li>
                  <li>• 数字化平台扩大影响范围</li>
                  <li>• 跨文化对话持续深入</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">未来展望</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 传统文化将更好地融入现代生活</li>
                  <li>• 国际影响力将进一步扩大</li>
                  <li>• 新技术将助力文化传播</li>
                  <li>• 培养更多文化传承人</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">成为文化传承的一份子</h3>
            <p className="text-gray-600 mb-6">
              南师的文化影响需要我们每个人的参与和传承，
              让我们一起为中华文化的复兴贡献自己的力量。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learning" className="btn-primary inline-flex items-center">
                开始学习传承
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/culture/biography" className="btn-secondary inline-flex items-center">
                了解先生生平
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}