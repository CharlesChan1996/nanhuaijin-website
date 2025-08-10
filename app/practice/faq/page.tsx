'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: '疑难解答 - 南怀瑾文化传承',
  description: '修行过程中常见问题的解答和指导',
}

interface FAQ {
  id: number
  category: string
  question: string
  answer: string
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const faqs: FAQ[] = [
    {
      id: 1,
      category: '学习入门',
      question: '我完全没有传统文化基础，应该从哪里开始学习？',
      answer: '建议从《论语别裁》开始，这是南怀瑾先生最经典的入门著作。先不要急于理解所有内容，重在培养兴趣和建立正确的学习态度。可以每天读一小段，慢慢体会其中的智慧。'
    },
    {
      id: 2,
      category: '学习入门',
      question: '南怀瑾先生的书很多，应该按什么顺序阅读？',
      answer: '推荐顺序：1）《论语别裁》《老子他说》《孟子旁通》- 建立基础；2）《易经杂说》《金刚经说什么》- 深入理解；3）《如何修证佛法》《禅海蠡测》- 实修指导。每个阶段都要结合实践，不要只是理论学习。'
    },
    {
      id: 3,
      category: '静坐修行',
      question: '静坐时总是妄念纷飞，无法集中注意力怎么办？',
      answer: '这是非常正常的现象，不要因此而沮丧。妄念如流水，越想止住越是不停。正确的方法是：1）不要排斥妄念，也不要跟随；2）温和地将注意力回到呼吸上；3）保持觉知，观察念头的起伏；4）持续练习，逐渐会有改善。'
    },
    {
      id: 4,
      category: '静坐修行',
      question: '静坐多长时间合适？每天什么时候坐最好？',
      answer: '初学者建议从5-10分钟开始，逐渐增加到20-30分钟。有经验后可以坐40-60分钟。最佳时间是清晨4-6点，此时心境最为清净。晚上7-9点也可以。重要的是每天坚持，时间固定，形成习惯。'
    },
    {
      id: 5,
      category: '静坐修行',
      question: '静坐时腿麻脚痛，应该如何处理？',
      answer: '初学者可以：1）坐椅子，不必强求盘腿；2）使用坐垫调整高度；3）感到不适时可以轻微调整姿势；4）逐渐增加盘腿时间，不要勉强。重要的是保持脊柱挺直，身体放松，不要因为腿痛而放弃修行。'
    },
    {
      id: 6,
      category: '理解困惑',
      question: '读经典时有很多不理解的地方，是否需要全部搞懂？',
      answer: '不需要一开始就全部理解。经典的智慧是分层次的，随着修行的深入，理解会逐渐加深。建议：1）先理解能理解的部分；2）不懂的地方做标记，继续往下读；3）多读几遍，每次都会有新的体会；4）结合生活实践来理解。'
    },
    {
      id: 7,
      category: '理解困惑',
      question: '如何区分哪些是迷信，哪些是真正的智慧？',
      answer: '判断标准：1）是否符合理性思考；2）是否有助于提升品德修养；3）是否能在生活中得到验证；4）是否让人更加慈悲智慧。真正的智慧是普世的，不分宗教和文化背景。如果某些内容让你感到困惑，可以暂时搁置，随着学习的深入再来理解。'
    },
    {
      id: 8,
      category: '实践应用',
      question: '学了很多理论，但在生活中遇到问题时还是会生气着急，怎么办？',
      answer: '这说明理论还没有真正内化。建议：1）遇事时先深呼吸三次，给自己思考的时间；2）问自己"如果是圣贤会怎么处理"；3）事后反思，看看哪里可以做得更好；4）不要对自己要求过高，修行是长期过程。重要的是有觉知，知道自己的不足。'
    },
    {
      id: 9,
      category: '实践应用',
      question: '家人不理解我学习传统文化，甚至反对，应该怎么办？',
      answer: '1）不要强迫家人接受，用自己的改变来感化他们；2）在家庭中实践慈悲和智慧，让家人感受到正面影响；3）不要因为学习而忽略家庭责任；4）可以分享一些生活智慧，但不要说教；5）保持耐心，真正的改变需要时间。'
    },
    {
      id: 10,
      category: '修行困惑',
      question: '修行了一段时间，感觉没有明显进步，是否方法不对？',
      answer: '修行的进步往往是潜移默化的，不要急于求成。可以从这些方面观察：1）内心是否比以前更平静；2）对人对事是否更有耐心；3）遇到困难时是否更能保持冷静；4）是否更容易感到满足和感恩。如果有这些变化，说明修行是有效果的。'
    },
    {
      id: 11,
      category: '修行困惑',
      question: '修行过程中出现一些特殊体验或感应，应该如何对待？',
      answer: '对于任何特殊体验都要保持平常心：1）不要执著，也不要排斥；2）不要到处宣扬，以免增长我慢；3）继续正常的修行，不要因此改变方法；4）如果体验影响正常生活，应该咨询有经验的老师；5）记住修行的目标是智慧和慈悲，不是神通感应。'
    },
    {
      id: 12,
      category: '日常修行',
      question: '工作很忙，没有时间修行怎么办？',
      answer: '修行不一定需要专门的时间和地点：1）利用上下班路上的时间听经典讲座；2）工作间隙做几次深呼吸，保持正念；3）用餐时保持感恩心；4）睡前花5-10分钟反思一天；5）将工作本身当作修行，以慈悲心对待同事客户。关键是保持修行的心态。'
    }
  ]

  const categories = ['all', '学习入门', '静坐修行', '理解困惑', '实践应用', '修行困惑', '日常修行']
  const categoryNames = {
    'all': '全部问题',
    '学习入门': '学习入门',
    '静坐修行': '静坐修行',
    '理解困惑': '理解困惑',
    '实践应用': '实践应用',
    '修行困惑': '修行困惑',
    '日常修行': '日常修行'
  }

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              疑难解答
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              修行路上难免会遇到各种疑问和困惑，这里整理了学习过程中的常见问题，
              希望能为您的修学之路提供一些参考和指导。
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分类筛选 */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {categoryNames[category as keyof typeof categoryNames]}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ列表 */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-4">
                  <div className="ml-8 pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 寻求帮助 */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">还有其他问题？</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">寻求指导</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 参加当地的读书会或学习小组</li>
                  <li>• 寻找有经验的老师或同道</li>
                  <li>• 参加相关的讲座和研讨会</li>
                  <li>• 在线交流平台与同修讨论</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">自我探索</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• 多读几遍相关经典著作</li>
                  <li>• 结合生活实践来理解</li>
                  <li>• 保持耐心，不急于求答案</li>
                  <li>• 记录疑问，定期回顾思考</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 重要提醒 */}
        <section className="mb-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">重要提醒</h3>
            <div className="space-y-3 text-gray-700">
              <p>• <strong>保持开放心态：</strong>对于不理解的问题，保持开放和谦逊的态度</p>
              <p>• <strong>实践验证：</strong>理论要结合实践，在生活中验证所学</p>
              <p>• <strong>循序渐进：</strong>修行是长期过程，不要急于求成</p>
              <p>• <strong>因人而异：</strong>每个人的情况不同，要找到适合自己的方法</p>
            </div>
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="text-center">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">继续您的学习之旅</h3>
            <p className="text-gray-600 mb-6">
              疑问是学习过程中的正常现象，保持好奇心和求知欲，
              在实践中寻找答案，让智慧在生活中绽放。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learning" className="btn-primary inline-flex items-center">
                返回学习指导
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/tools/notes" className="btn-secondary inline-flex items-center">
                记录学习心得
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}