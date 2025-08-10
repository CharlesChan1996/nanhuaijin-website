import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Clock, CheckCircle, ArrowRight, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: '进阶修学 - 南怀瑾文化传承',
  description: '深入理解传统文化精髓的进阶学习路径',
}

export default function IntermediateLearningPage() {
  const curriculum = [
    {
      phase: '第一阶段',
      duration: '2-3个月',
      title: '易学基础',
      books: ['易经杂说', '易经系传别讲'],
      focus: '理解易经智慧，掌握变化规律',
      skills: ['阴阳五行理论', '八卦基础知识', '变化思维方式']
    },
    {
      phase: '第二阶段', 
      duration: '2-3个月',
      title: '佛学入门',
      books: ['金刚经说什么', '圆觉经略说'],
      focus: '了解佛法精髓，培养般若智慧',
      skills: ['空性理解', '般若思维', '禅修基础']
    },
    {
      phase: '第三阶段',
      duration: '2-3个月', 
      title: '禅宗智慧',
      books: ['禅海蠡测', '禅宗与道家'],
      focus: '体悟禅宗精神，开发直觉智慧',
      skills: ['禅宗公案理解', '直觉思维', '当下觉知']
    },
    {
      phase: '第四阶段',
      duration: '3-4个月',
      title: '综合修学',
      books: ['原本大学微言', '中庸讲记'],
      focus: '融会贯通三教思想，形成完整体系',
      skills: ['三教融合', '系统思维', '实践应用']
    }
  ]

  const practiceAreas = [
    {
      title: '理论学习',
      description: '深入研读经典，理解核心思想',
      methods: ['精读原文', '对比注解', '思辨讨论', '笔记整理']
    },
    {
      title: '实修体验',
      description: '通过实践验证理论，获得真实体悟',
      methods: ['静坐冥想', '日常观照', '行住坐卧', '生活应用']
    },
    {
      title: '交流分享',
      description: '与同道交流心得，互相启发提升',
      methods: ['读书会', '讨论组', '心得分享', '疑难解答']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              进阶修学路径
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              在初学基础上深入探索，系统学习易学、佛学、禅宗等核心思想，
              培养更深层的智慧理解和实践能力。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 学习概览 */}
        <section className="mb-12">
          <div className="bg-green-50 rounded-xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">进阶学习特色</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Compass className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">系统深入</div>
                <div className="text-gray-600">四大阶段循序渐进</div>
              </div>
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">经典研读</div>
                <div className="text-gray-600">精选核心典籍</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">理实结合</div>
                <div className="text-gray-600">理论与实践并重</div>
              </div>
            </div>
          </div>
        </section>

        {/* 学习阶段 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">四阶段学习计划</h2>
          <div className="space-y-8">
            {curriculum.map((stage, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {stage.phase}
                      </span>
                      <span className="text-gray-500 text-sm">{stage.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600">{stage.focus}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">核心书目</h4>
                    <ul className="space-y-2">
                      {stage.books.map((book, bookIndex) => (
                        <li key={bookIndex} className="flex items-center text-gray-700">
                          <BookOpen className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {book}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">核心技能</h4>
                    <ul className="space-y-2">
                      {stage.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 实修方法 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">三维实修体系</h2>
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

        {/* 学习提醒 */}
        <section className="mb-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">重要提醒</h3>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>循序渐进：</strong>建议完成初学者路径后再开始进阶学习</p>
              <p>• <strong>理解为主：</strong>重在理解精神实质，不要拘泥于文字表面</p>
              <p>• <strong>实修验证：</strong>理论学习必须结合实际修行体验</p>
              <p>• <strong>保持谦逊：</strong>越学越要保持谦逊，避免我慢增长</p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">准备开始进阶学习？</h3>
            <p className="text-gray-600 mb-6">
              确保您已具备扎实的基础，然后开始这段更深入的智慧探索之旅。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learning/beginner" className="btn-secondary inline-flex items-center">
                回顾基础课程
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tools/meditation-timer" className="btn-primary inline-flex items-center">
                开始实修练习
                <Compass className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}