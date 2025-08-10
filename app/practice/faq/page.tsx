import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'
import FAQList from './FAQList'

export const metadata: Metadata = {
  title: '疑难解答 - 南怀瑾文化传承',
  description: '修行过程中常见问题的解答和指导',
}

export default function FAQPage() {


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
        <FAQList />

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