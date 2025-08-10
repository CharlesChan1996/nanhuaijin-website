import Link from 'next/link'
import { BookOpen, Users, Compass, Heart, Lightbulb } from 'lucide-react'

const navigation = {
  main: [
    { name: '文化介绍', href: '/culture' },
    { name: '经典著作', href: '/books' },
    { name: '学习指导', href: '/learning' },
    { name: '实修工具', href: '/tools' },
  ],
  resources: [
    { name: '学习路径', href: '/learning/path' },
    { name: '修行指导', href: '/learning/practice' },
    { name: '常见问题', href: '/faq' },
    { name: '推荐书单', href: '/books/recommended' },
  ],
  tools: [
    { name: '静坐计时器', href: '/tools/meditation-timer' },
    { name: '修行日历', href: '/tools/practice-calendar' },
    { name: '学习笔记', href: '/tools/notes' },
    { name: '个人收藏', href: '/tools/bookmarks' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-secondary-50 border-t border-primary-200/50">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">南</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gradient">南怀瑾文化传承网</h3>
                  <p className="text-sm text-primary-600">传统智慧的现代传播</p>
                </div>
              </div>
              <p className="text-sm text-primary-700 leading-relaxed mb-4">
                致力于传播南怀瑾先生的思想智慧，让传统文化在现代社会中焕发新的生命力，为寻求人生智慧的朋友提供学习和修行的指导。
              </p>
              <div className="flex items-center text-sm text-primary-600">
                <Heart className="w-4 h-4 mr-1 text-red-500" />
                <span>用心传承，智慧共享</span>
              </div>
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase mb-4">
                主要栏目
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Resources */}
            <div>
              <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase mb-4">
                学习资源
              </h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase mb-4">
                实修工具
              </h3>
              <ul className="space-y-3">
                {navigation.tools.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary-200/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-600 mb-4 md:mb-0">
              <p>&copy; 2024 南怀瑾文化传承网. 传承智慧，启迪人生.</p>
            </div>
            <div className="flex space-x-6 text-sm text-primary-600">
              <Link href="/privacy" className="hover:text-primary-900 transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-primary-900 transition-colors">
                使用条款
              </Link>
              <Link href="/contact" className="hover:text-primary-900 transition-colors">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}