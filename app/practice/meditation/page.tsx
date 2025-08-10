import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, Heart, Brain, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: '静坐入门 - 南怀瑾文化传承',
  description: '基础静坐方法与注意事项，帮助初学者正确入门',
}

export default function MeditationPage() {
  const steps = [
    {
      step: 1,
      title: '准备工作',
      description: '选择合适的环境和时间',
      details: [
        '选择安静、通风良好的房间',
        '准备舒适的坐垫或椅子',
        '穿着宽松舒适的衣服',
        '选择固定的修行时间'
      ]
    },
    {
      step: 2,
      title: '坐姿调整',
      description: '建立正确的身体姿态',
      details: [
        '双腿盘坐或端坐椅上',
        '脊柱自然挺直，不僵硬',
        '双手自然放置，结手印或放膝上',
        '头部端正，下颌微收'
      ]
    },
    {
      step: 3,
      title: '呼吸调节',
      description: '通过呼吸进入静定状态',
      details: [
        '自然呼吸，不要刻意控制',
        '观察呼吸的进出',
        '数息：从1数到10，再重新开始',
        '心散乱时回到呼吸上'
      ]
    },
    {
      step: 4,
      title: '心念观照',
      description: '培养内在的觉知力',
      details: [
        '观察念头的起伏',
        '不跟随念头，不排斥念头',
        '保持清明的觉知',
        '逐渐进入宁静状态'
      ]
    }
  ]

  const benefits = [
    {
      icon: Brain,
      title: '提升专注力',
      description: '增强注意力集中能力，提高工作学习效率'
    },
    {
      icon: Heart,
      title: '平静情绪',
      description: '减少焦虑烦躁，培养内心的平和宁静'
    },
    {
      icon: Clock,
      title: '改善睡眠',
      description: '放松身心，改善睡眠质量，恢复精力'
    }
  ]

  const commonIssues = [
    {
      problem: '腿麻脚痛',
      solution: '初学者可坐椅子，逐渐适应盘腿。感到不适时可调整姿势。'
    },
    {
      problem: '妄念纷飞',
      solution: '这是正常现象，不要强行压制，温和地回到呼吸观察上。'
    },
    {
      problem: '昏沉瞌睡',
      solution: '保持脊柱挺直，眼睛微睁，或在通风处静坐。'
    },
    {
      problem: '时间难熬',
      solution: '从短时间开始，5-10分钟即可，逐渐延长。'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              静坐入门指导
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              静坐是修行的基础功夫，通过正确的方法和持续的练习，
              可以培养内心的宁静与智慧。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 静坐步骤 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">四步入门法</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                  </div>
                </div>
                
                <div className="ml-12">
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
            ))}
          </div>
        </section>

        {/* 静坐益处 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">静坐的益处</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 常见问题 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">常见问题解答</h2>
          <div className="space-y-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{issue.problem}</h3>
                    <p className="text-gray-700">{issue.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 修行建议 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">修行建议</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">初学者</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 每天5-10分钟开始</li>
                  <li>• 固定时间和地点</li>
                  <li>• 重在坚持，不求效果</li>
                  <li>• 可参加静坐小组</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">进阶者</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 逐渐延长至30-60分钟</li>
                  <li>• 尝试不同的观修方法</li>
                  <li>• 结合经典学习</li>
                  <li>• 寻求善知识指导</li>
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
              <p>• <strong>循序渐进：</strong>不要急于求成，静坐功夫需要时间积累</p>
              <p>• <strong>身体健康：</strong>有严重疾病者应咨询医生后再开始静坐</p>
              <p>• <strong>正确指导：</strong>建议在有经验的老师指导下学习</p>
              <p>• <strong>平常心：</strong>不要执著于任何境界或感受</p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">开始您的静坐之旅</h3>
            <p className="text-gray-600 mb-6">
              静坐是一门实践的功夫，理论了解后最重要的是开始行动。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools/meditation-timer" className="btn-primary inline-flex items-center">
                使用静坐计时器
                <Clock className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/practice/daily" className="btn-secondary inline-flex items-center">
                日常修行指导
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}