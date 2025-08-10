import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Compass, Heart, Lightbulb, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: '思想体系 - 南怀瑾文化传承',
  description: '探索南怀瑾先生融汇儒释道三家的独特思想体系和哲学观点',
}

export default function PhilosophyPage() {
  const threeTeachings = [
    {
      name: '儒家思想',
      icon: BookOpen,
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      core: '修身齐家治国平天下',
      principles: [
        '仁爱为本 - 以仁爱之心对待他人',
        '礼义廉耻 - 遵循社会道德规范',
        '中庸之道 - 保持平衡，不偏不倚',
        '学而时习 - 持续学习，终身修养'
      ],
      modernValue: '在现代社会中，儒家思想为我们提供了做人做事的基本准则，强调个人修养与社会责任的统一。'
    },
    {
      name: '道家智慧',
      icon: Compass,
      color: 'bg-green-50 border-green-200 text-green-800',
      core: '道法自然，无为而治',
      principles: [
        '顺应自然 - 遵循自然规律行事',
        '无为而治 - 以最小干预获得最大效果',
        '虚静致远 - 保持内心的宁静与空灵',
        '柔弱胜刚强 - 以柔克刚的智慧'
      ],
      modernValue: '道家思想教导我们如何在复杂的现代生活中保持内心的平静，以智慧应对各种挑战。'
    },
    {
      name: '佛学精髓',
      icon: Heart,
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      core: '慈悲智慧，觉悟解脱',
      principles: [
        '慈悲为怀 - 对一切众生怀有慈悲心',
        '般若智慧 - 透过现象看本质的智慧',
        '因果法则 - 理解行为与结果的关系',
        '空性观念 - 理解万物的相互依存性'
      ],
      modernValue: '佛学帮助我们超越物质追求，获得内心的真正平静和智慧，实现精神层面的解脱。'
    }
  ]

  const corePhilosophies = [
    {
      title: '三教合一',
      description: '南师认为儒释道三家本质上是相通的，都是为了帮助人类获得智慧和幸福。',
      details: [
        '儒家注重现世的道德修养和社会责任',
        '道家强调顺应自然和内心的宁静',
        '佛家追求超越和觉悟的智慧',
        '三者相互补充，形成完整的人生哲学'
      ]
    },
    {
      title: '知行合一',
      description: '真正的学问不仅在于理解，更在于实践。理论与实践必须相结合。',
      details: [
        '学习经典不能只停留在文字层面',
        '必须在生活中实践所学的道理',
        '通过实践来验证和深化理解',
        '最终达到知行合一的境界'
      ]
    },
    {
      title: '文化传承',
      description: '传统文化是民族的根基，必须在继承中发展，在发展中传承。',
      details: [
        '尊重传统文化的精神内核',
        '用现代语言阐释古代智慧',
        '让传统文化适应现代社会',
        '培养新一代的文化传承人'
      ]
    }
  ]

  const practicalApplications = [
    {
      area: '个人修养',
      methods: [
        '每日反省自己的言行',
        '培养慈悲心和包容心',
        '保持学习的谦逊态度',
        '在困难中寻找成长机会'
      ]
    },
    {
      area: '人际关系',
      methods: [
        '以诚待人，以德服人',
        '理解他人的立场和感受',
        '在冲突中寻求和谐解决',
        '用智慧化解人际矛盾'
      ]
    },
    {
      area: '工作事业',
      methods: [
        '以责任心对待工作',
        '在工作中实践道德原则',
        '保持专业精神和敬业态度',
        '追求事业与人格的统一'
      ]
    },
    {
      area: '社会责任',
      methods: [
        '关心社会公益事业',
        '传播正能量和正确价值观',
        '为社会和谐贡献自己的力量',
        '承担起文化传承的责任'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              南怀瑾思想体系
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              融汇儒释道三家精华，构建完整的人生哲学体系，
              为现代人提供智慧的指引和精神的滋养。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 三教合一 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">三教合一的智慧</h2>
            <p className="text-lg text-gray-600">
              南师将儒释道三家思想融会贯通，形成了独特而完整的哲学体系
            </p>
          </div>

          <div className="space-y-8">
            {threeTeachings.map((teaching, index) => {
              const IconComponent = teaching.icon
              return (
                <div key={index} className={`${teaching.color.split(' ')[0]} ${teaching.color.split(' ')[1]} border-2 rounded-xl p-8`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className={`w-6 h-6 ${teaching.color.split(' ')[2]}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{teaching.name}</h3>
                      <p className="text-gray-700 font-medium">{teaching.core}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">核心原则：</h4>
                      <ul className="space-y-2">
                        {teaching.principles.map((principle, principleIndex) => (
                          <li key={principleIndex} className="flex items-start text-gray-700">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            {principle}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">现代价值：</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {teaching.modernValue}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 核心哲学理念 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心哲学理念</h2>
            <p className="text-lg text-gray-600">
              南师思想体系的三大支柱，指导我们的学习和实践
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePhilosophies.map((philosophy, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {philosophy.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {philosophy.description}
                </p>
                <ul className="space-y-2">
                  {philosophy.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-700 text-sm">
                      <Lightbulb className="w-3 h-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 实践应用 */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">实践应用</h2>
            <p className="text-lg text-gray-600">
              将南师的思想智慧运用到生活的各个方面
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {application.area}
                </h3>
                <ul className="space-y-2">
                  {application.methods.map((method, methodIndex) => (
                    <li key={methodIndex} className="flex items-start text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 学习建议 */}
        <section className="mb-16">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">学习南师思想的建议</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">学习方法</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>循序渐进：</strong>从基础著作开始，逐步深入</li>
                  <li>• <strong>理实结合：</strong>理论学习与生活实践相结合</li>
                  <li>• <strong>反复研读：</strong>经典需要多次阅读才能深入理解</li>
                  <li>• <strong>交流讨论：</strong>与同道交流心得体会</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">学习态度</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• <strong>保持谦逊：</strong>以空杯心态学习</li>
                  <li>• <strong>持之以恒：</strong>学习是终身的事业</li>
                  <li>• <strong>学以致用：</strong>将所学运用到生活中</li>
                  <li>• <strong>传承文化：</strong>承担起文化传承的责任</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">深入学习南师思想</h3>
            <p className="text-gray-600 mb-6">
              理解了思想体系，现在开始系统学习南师的经典著作，
              在实践中体验传统文化的智慧魅力。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/books" className="btn-primary inline-flex items-center">
                阅读经典著作
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/learning" className="btn-secondary inline-flex items-center">
                制定学习计划
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}