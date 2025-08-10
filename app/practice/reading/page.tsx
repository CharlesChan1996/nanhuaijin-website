import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Eye, Heart, Brain, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: '读书方法 - 南怀瑾文化传承',
  description: '如何正确阅读经典著作，掌握有效的学习方法',
}

export default function ReadingMethodPage() {
  const readingSteps = [
    {
      step: 1,
      title: '选择合适的版本',
      icon: BookOpen,
      description: '选择权威、注释详细的版本',
      details: [
        '优先选择南怀瑾先生亲自讲述的版本',
        '选择有详细注释和解释的版本',
        '可以对比不同版本的翻译和注解',
        '准备纸质书和电子版本备用'
      ]
    },
    {
      step: 2,
      title: '通读全文',
      icon: Eye,
      description: '先整体了解内容结构',
      details: [
        '不求甚解，先通读一遍',
        '了解全书的整体结构和主要观点',
        '标记不理解的地方，不要停留太久',
        '建立对全书的整体印象'
      ]
    },
    {
      step: 3,
      title: '精读重点',
      icon: Brain,
      description: '深入理解核心内容',
      details: [
        '选择重要章节进行精读',
        '查阅相关资料和注释',
        '思考内容与现实生活的联系',
        '记录重要观点和个人感悟'
      ]
    },
    {
      step: 4,
      title: '实践体验',
      icon: Heart,
      description: '将理论运用到生活中',
      details: [
        '尝试将所学应用到日常生活',
        '观察实践后的内心变化',
        '与同道交流讨论心得',
        '定期回顾和总结体验'
      ]
    }
  ]

  const readingTechniques = [
    {
      title: '分层阅读法',
      description: '按照不同层次逐步深入',
      steps: [
        '第一层：了解字面意思',
        '第二层：理解深层含义',
        '第三层：体悟精神实质',
        '第四层：融入生活实践'
      ]
    },
    {
      title: '对比阅读法',
      description: '通过对比加深理解',
      steps: [
        '对比不同版本的翻译',
        '对比不同学者的注解',
        '对比古今文化背景',
        '对比个人前后理解'
      ]
    },
    {
      title: '问题导向法',
      description: '带着问题去阅读',
      steps: [
        '阅读前提出具体问题',
        '在阅读中寻找答案',
        '记录新产生的问题',
        '与他人讨论疑难问题'
      ]
    }
  ]

  const notesTaking = [
    {
      type: '摘录笔记',
      description: '记录重要的原文段落',
      tips: [
        '选择最有启发的句子',
        '注明出处和页码',
        '用自己的话简要概括',
        '定期回顾和整理'
      ]
    },
    {
      type: '感悟笔记',
      description: '记录个人的理解和感受',
      tips: [
        '写下当时的真实感受',
        '记录联想到的生活经历',
        '思考如何应用到实际中',
        '不要担心想法不够成熟'
      ]
    },
    {
      type: '疑问笔记',
      description: '记录不理解的地方',
      tips: [
        '详细记录疑问点',
        '查找相关资料解答',
        '请教有经验的人',
        '记录解答过程和结果'
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: '急于求成',
      description: '想要快速理解所有内容',
      solution: '经典需要反复阅读，每次都会有新的理解。要有耐心，循序渐进。'
    },
    {
      mistake: '只读不思',
      description: '只是被动接受，不主动思考',
      solution: '要带着问题阅读，经常停下来思考，将内容与自己的经历联系。'
    },
    {
      mistake: '理论脱离实践',
      description: '只停留在理论层面，不去实践',
      solution: '要将所学运用到生活中，通过实践来验证和深化理解。'
    },
    {
      mistake: '孤立阅读',
      description: '独自阅读，不与他人交流',
      solution: '多与同道交流讨论，参加读书会，分享心得体会。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              经典阅读方法
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              掌握正确的阅读方法，让经典著作成为您智慧成长的阶梯。
              好的方法能让您事半功倍，深入理解古圣先贤的智慧精髓。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 四步阅读法 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">四步阅读法</h2>
          <div className="space-y-8">
            {readingSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h4 className="font-semibold text-gray-900 mb-3">具体方法：</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 阅读技巧 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">三种阅读技巧</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {readingTechniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{technique.title}</h3>
                <p className="text-gray-600 mb-4">{technique.description}</p>
                <ul className="space-y-2">
                  {technique.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 笔记方法 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">三类笔记方法</h2>
          <div className="space-y-6">
            {notesTaking.map((note, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{note.type}</h3>
                    <p className="text-gray-600">{note.description}</p>
                  </div>
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">实用技巧：</h4>
                  <ul className="space-y-2">
                    {note.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 常见误区 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">避免常见误区</h2>
          <div className="space-y-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-red-50 rounded-lg border border-red-200 p-6">
                <h3 className="font-semibold text-red-900 mb-2 text-lg">
                  误区：{item.mistake}
                </h3>
                <p className="text-red-700 mb-3">{item.description}</p>
                <p className="text-gray-700">
                  <strong>正确做法：</strong>{item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 推荐阅读顺序 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">推荐阅读顺序</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">初学者路径</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. 《论语别裁》- 儒家入门</li>
                  <li>2. 《老子他说》- 道家智慧</li>
                  <li>3. 《孟子旁通》- 深化儒学</li>
                  <li>4. 《历史的经验》- 历史智慧</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">进阶路径</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. 《易经杂说》- 易学基础</li>
                  <li>2. 《金刚经说什么》- 佛学入门</li>
                  <li>3. 《禅海蠡测》- 禅宗智慧</li>
                  <li>4. 《如何修证佛法》- 实修指导</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 阅读环境建议 */}
        <section className="mb-12">
          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">营造良好的阅读环境</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">物理环境</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 选择安静、光线充足的地方</li>
                  <li>• 准备舒适的座椅和书桌</li>
                  <li>• 关闭手机等干扰源</li>
                  <li>• 准备笔记本和笔</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">心理环境</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 保持恭敬和谦逊的心态</li>
                  <li>• 放下成见，以空杯心态学习</li>
                  <li>• 不急不躁，保持耐心</li>
                  <li>• 带着感恩的心阅读</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开始您的阅读之旅</h3>
            <p className="text-gray-600 mb-6">
              掌握了正确的方法，现在就开始您的经典阅读之旅吧。
              让古圣先贤的智慧照亮您的人生道路。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/books" className="btn-primary inline-flex items-center">
                浏览经典书目
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